/*
 Copyright (c) 2016 Codazen.
 This file is subject to the license terms in the LICENSE file in the top-level directory of this distribution and at https://github.com/codazen/formulationjs/blob/master/LICENSE.  
 No part of FormulationJS, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the LICENSE file.
 */

'use strict';
global.jQuery = require('jquery');

import React from 'react';
import Checkbox from './Checkbox.react';
import Textbox from './Textbox.react';
import Dropdown from './Dropdown.react';
import Textarea from './Textarea.react';
import DatePicker from './DatePicker.react';

import classNames from 'classnames';

class Container extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      form: this.props.form,
      initialRender: true,
      verifyTrue: true
    };

    // Create component registry and initialize default components
    // TODO Move this out of form into ComponentRegistry
    this.componentRegistry = {};
    this.componentRegistry['container'] = Container;
    this.componentRegistry['checkbox'] = Checkbox;
    this.componentRegistry['textbox'] = Textbox;
    this.componentRegistry['dropdown'] = Dropdown;
    this.componentRegistry['textarea'] = Textarea;
    this.componentRegistry['datepicker'] = DatePicker;
  }

  registerComponent(key, componentClass) {
    this.componentRegistry[key] = componentClass;
  }

  static getComponentInstance(index, element, onClick, onChange, initialRender) {
    return <Container
      key={index}
      config={element.data}
      name={element.name}
      onClick={onClick}
      onChange={onChange}
      initialRender={initialRender}
      children={element.children}
    />;
  }

  // TODO Delegate individual component validation
  _componentsValid(form) {
    //if true don't return until end, if false stop right away
    for (var x in form.elements) {
      var element = form.elements[x];
      switch (element.type) {
        case 'textbox':
          var re = /^([^.@]+[.]?)+[^.@]+@([\w]+(\.|\-|(\.\-\.)|(\-\.\-)|(\.\-)+|(\-\.)+)\w+)+$/;
          if ((!element.data.value && element.data.required && element.data.textboxState) || (element.data.email && element.data.value && !re.test(element.data.value))) {
            return false;
          }
          break;
        case 'textarea':
          if (!element.data.value && element.data.required && element.data.textareaState) {
            return false;
          }
          break;
        case 'dropdown':
          if (!element.data.value && element.data.required) {
            return false;
          }
          break;
        case 'checkbox':
          if (element.data.value.length == 0 && element.data.required) {
            return false;
          }
          break;
        case 'datepicker':
          if (!element.data.value && element.data.required) {
            return false;
          }
          break;
      }
    }
    return true;
  }

  removeTags(html) {
    if (html !== null) {
      var sanitizedHtml;
      sanitizedHtml = html.replace(/</g, '&lt;');
      sanitizedHtml = sanitizedHtml.replace(/>/g, '&rt;');
      sanitizedHtml = sanitizedHtml.replace(/&/g, '&amp;');
      sanitizedHtml = sanitizedHtml.replace(/"/g, '&quot;');
      sanitizedHtml = sanitizedHtml.replace(/'&'/g, '&#39;');

      return sanitizedHtml;
    }
  }

  _handleChange(index, type, e) {
    var form = this.state.form;
    form.elements[index].data.value = e.target[type];
    this.setState({
      form: form,
      verifyTrue: true
    });
  }

  _handleDateChange(index, value) {
    var form = this.state.form;
    form.elements[index].data.value = value;
    this.setState({
      form: form,
      verifyTrue: true
    });
  }

  _handleToggle(index, type, e) {
    var form = this.state.form;
    switch (e.target[type]) {
      case true:
        form.elements[index].data.value.push(e.target['value']);
        break;
      case false:
        for (var i = 0; i < form.elements[index].data.value.length; i++) {
          if (form.elements[index].data.value[i] == e.target['value']) {
            form.elements[index].data.value.splice(i, 1)
          }
        }
        break;
      default:
        break;
    }
    this.setState({
      form: form,
      verifyTrue: true
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      form: nextProps.form,
      verifyTrue: true
    });
  }

  renderChildren(children) {
    return children ?
      children.map((element, index) => {
        // TODO Add checks to handle it component is found in registry or not
        var ComponentClass = this.componentRegistry[element.type.toLowerCase()];
        if (ComponentClass) {
          return ComponentClass.getComponentInstance(
            index,
            element,
            this._handleToggle.bind(this, index, 'checked'), // FIXME: This is a specifi
            this._handleChange.bind(this, index, 'value'),
            this.state.initialRender
          );
        } else {
          console.warn('Component ' + element.type + ' not found');
        }
      })
      :
      null;
  }

  //Using noValidate will allow the data to be submitted at all times...
  render() {
    var { config, onChange, onClick, initialRender, children } = this.props;
    return (
      <div className="container">
        {
          this.renderChildren(children)
        }
      </div>
    );
  }
}

export default Container;
