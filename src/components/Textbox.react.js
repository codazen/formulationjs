/*
Copyright (c) 2016 Codazen. 
This file is subject to the license terms in the LICENSE file in the top-level directory of this distribution and at https://github.com/codazen/formulationjs/blob/master/LICENSE.  
No part of FormulationJS, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the LICENSE file.
*/

'use strict';
require('./styles/Textbox.less');

import React from 'react';
import classNames from 'classnames';

class Textbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      emailIsValid : true
    };
    this._handleBlur = this._handleBlur.bind(this);
  }

  _handleBlur(e){
    if(this.props.textbox.email){
      var value = e.target.value;
      var re = /^([^.@]+[.]?)+[^.@]+@([\w]+(\.|\-|(\.\-\.)|(\-\.\-)|(\.\-)+|(\-\.)+)\w+)+$/;
      var emailIsValid = re.test(value)
      this.setState({
        emailIsValid : emailIsValid
      });
    }
  }

  render() {
    var { textbox, onChange, initialRender } = this.props;
    var star = textbox.required ? '*' : '';
    var required = textbox.required ? 'Required Field' : '';
    var invalid = !textbox.value && !initialRender && textbox.required && textbox.textboxState;
    var maximumLength = textbox.maxlength ? textbox.maxlength : 10000;
    var disabled = !textbox.textboxState;
    var classes = classNames({
      'invalid' : invalid,
      'disabled' : disabled,
      'emailInvalid' : !this.state.emailIsValid && textbox.value,
      'form-control' : true
    });
    return (
      <div className="row">
        <div className="col-md-4 form-style"><label htmlFor={textbox.name}>{textbox.label}{star}</label></div>
        <div className="col-md-8">
          <input
            type="text"
            id={textbox.id}
            name={textbox.name}
            maxLength={maximumLength}
            value={textbox.value}
            className={classes}
            onChange={onChange}
            onBlur={this._handleBlur}
            email = {textbox.email}
            disabled={disabled}
          />
          {
            invalid ?
            <div className="required">Required Field</div> : null
          }
          {
            textbox.email && !this.state.emailIsValid && textbox.value ?
            <div className="required">Invalid Email Format</div> : null
          }
        </div>
      </div>
    );
  }
}

export default Textbox;
