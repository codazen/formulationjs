/*
Copyright (c) 2016 Codazen.
This file is subject to the license terms in the LICENSE file in the top-level directory of this distribution and at https://github.com/codazen/formulationjs/blob/master/LICENSE.  
No part of FormulationJS, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the LICENSE file.
*/

'use strict';
global.jQuery = require('jquery');

import React from 'react';

// TODO Register components instead hard-coding dependencies
import Checkbox from './Checkbox.react';
import Textbox from './Textbox.react';
import Dropdown from './Dropdown.react';
import Textarea from './Textarea.react';
import DatePicker from './DatePicker.react';
import Container from './Container.react';

import classNames from 'classnames';

class Form extends Container {

  constructor(props) {
    super(props);
    
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleDateChange = this._handleDateChange.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();

    var sanitizedForm = new Object();
    sanitizedForm = JSON.parse(JSON.stringify(this.state.form));
    for (var x in sanitizedForm.elements){
      var element = sanitizedForm.elements[x];
      if(element.type == 'textbox' || element.type == 'textarea' || element.type === "datepicker"){
        element.data.value = this.removeTags(element.data.value);
      }
    }

    if (this._componentsValid(this.state.form)) { //& the required true
      this.props.callback(sanitizedForm);
    }

     this.setState({
       initialRender: false,
       verifyTrue: false
     });
  }

  _handleChange(index, type, e) {
    var form = this.state.form;
    form.elements[index].data.value = e.target[type];
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
      'form-style' : true,
      'hide': disabled
    });
    return (
      <section>
        <form onSubmit={this._handleSubmit}>
          <div className="form-group">
            {
              super.renderChildren(form.elements)
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
