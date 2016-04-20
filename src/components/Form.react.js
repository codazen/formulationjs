/*
Copyright (c) 2016 Codazen. 
This file is subject to the license terms in the LICENSE file in the top-level directory of this distribution and at https://github.com/codazen/formulationjs/blob/master/LICENSE.  
No part of FormulationJS, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the LICENSE file.
*/

'use strict';
require('./styles/Form.less');
global.jQuery = require('jquery');
require('bootstrap');

import React from 'react';
import Checkbox from './Checkbox.react';
import Textbox from './Textbox.react';
import Dropdown from './Dropdown.react';
import Textarea from './Textarea.react';
import DatePicker from './DatePicker.react';
import classNames from 'classnames';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      form: this.props.form,
      initialRender: true,
      verifyTrue: true
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleDateChange = this._handleDateChange.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();

    var sanitizedForm = new Object();
    sanitizedForm = JSON.parse(JSON.stringify(this.state.form));
    for (var x in sanitizedForm.elements){
      var element = sanitizedForm.elements[x];  
      if(element.type == 'textbox' || element.type == 'textarea'){
        element.data.value = this.removeTags(element.data.value);
      }
    }

    if (this._componentsValid(this.state.form)) { //& the required true
      console.log(sanitizedForm);
      console.log("User clicked submit at: " + Date());
    }
    
     this.setState({
       initialRender: false,
       verifyTrue: false
     });
  }

  _componentsValid(form) {
    //if true don't return until end, if false stop right away
    for(var x in form.elements) {
      var element = form.elements[x];
      switch(element.type) {
        case 'textbox':
          var re = /^([^.@]+[.]?)+[^.@]+@([\w]+(\.|\-|(\.\-\.)|(\-\.\-)|(\.\-)+|(\-\.)+)\w+)+$/;
          if ((!element.data.value && element.data.required) || (element.data.email && element.data.value && !re.test(element.data.value))) {
            return false;
          }
          break;
        case 'textarea':
          if (!element.data.value && element.data.required) {
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
      }
    }
    return true;
  }

  removeTags(html) {
    var sanitizedHtml;
    sanitizedHtml = html.replace(/</g, '&lt;');
    sanitizedHtml = sanitizedHtml.replace(/>/g, '&rt;');
    sanitizedHtml = sanitizedHtml.replace(/&/g, '&amp;');
    sanitizedHtml = sanitizedHtml.replace(/"/g, '&quot;');
    sanitizedHtml = sanitizedHtml.replace(/'&'/g, '&#39;');

    return sanitizedHtml;
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
    switch(e.target[type]){
      case true:
      form.elements[index].data.value.push(e.target['value']);
        break
      case false:
      for (var i=0; i<form.elements[index].data.value.length; i++){
        if (form.elements[index].data.value[i] == e.target['value']){
          form.elements[index].data.value.splice(i, 1)
        }
      }
        break
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

  //Using noValidate will allow the data to be submitted at all times...
  render() {
    var form = this.state.form;
    //var notVerify = !this._componentsValid(this.state.form) && !this.state.initialRender ? 'Did not submit form. Please try again!' : '';
    var notVerify = !this._componentsValid(this.state.form) && !this.state.verifyTrue ? 'Did not submit form. Please try again!' : '';
    //var verify = this._componentsValid(this.state.form) && !this.state.initialRender ? 'Your form is ready to submit.' : '';
    var verify = this._componentsValid(this.state.form) && !this.state.verifyTrue ? 'Your form has been submitted. Thank you!' : '';
    var disabled = form.submitDisabled;
    var classes = classNames({
      'disabled' : disabled,
      'form-style' : true
    });
    return (
      <section>
        <h1 className="form-style">{form.name}</h1>
        <p className="form-style">{form.body}</p>
        <form onSubmit={this._handleSubmit}>
          <div className="form-group">
            {
              form.elements ?
              form.elements.map((element, index) => {
                var component;
                switch (element.type.toLowerCase()) {
                  case 'textbox':
                  component = <Textbox key={index} textbox={element.data} onChange={this._handleChange.bind(this, index, 'value')} initialRender={this.state.initialRender} />;
                    break;
                  case 'textarea':
                  component = <Textarea key={index} textarea={element.data} onChange={this._handleChange.bind(this, index, 'value')} initialRender={this.state.initialRender} />;
                    break;
                  case 'checkbox':
                  component = <Checkbox key={index} checkbox={element.data} name={element.name} onClick={this._handleToggle.bind(this, index, 'checked')} onChange={this._handleChange.bind(this, index, 'checked')} initialRender={this.state.initialRender} />;
                    break;
                  case 'dropdown':
                    if (element.placeholder){
                      component = <Dropdown key={index} dropdown={element.data} placeholder={element.placeholder} onChange={this._handleChange.bind(this, index, 'value')} initialRender={this.state.initialRender} />;
                    }
                    else{
                      component = <Dropdown key={index} dropdown={element.data} onChange={this._handleChange.bind(this, index, 'value')} />;
                    }
                    break;
                  case 'datepicker':
                    component = <DatePicker key={index} index={index} datepicker={element.data} onChange={this._handleDateChange} />
                    break;
                  default:
                    break;
                }
                return component;
              })
              :
              null
            }
          </div>
            <input id="formSubmit" className={classes} type="submit" value="Submit" />
            <span id = {"verify" + (verify ? "" : " hide-message")}>{verify}</span>
            <span id = {"notVerify" + (notVerify ? "" : " hide-message")}>{notVerify}</span>
        </form>
      </section>
    );
  }
}

export default Form;
