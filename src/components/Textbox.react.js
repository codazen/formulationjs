/*
 Copyright (c) 2016 Codazen.
 This file is subject to the license terms in the LICENSE file in the top-level directory of this distribution and at https://github.com/codazen/formulationjs/blob/master/LICENSE.  
 No part of FormulationJS, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the LICENSE file.
 */

'use strict';

import React from 'react';
import classNames from 'classnames';
import FormElement from './FormElement.react';

class Textbox extends FormElement {

  constructor(props) {
    super(props);
    this.state = {
      emailIsValid: true
    };
    this._handleBlur = this._handleBlur.bind(this);
  }

  _handleBlur(e) {
    if (this.props.textbox.email) {
      var value = e.target.value;
      var re = /^([^.@]+[.]?)+[^.@]+@([\w]+(\.|\-|(\.\-\.)|(\-\.\-)|(\.\-)+|(\-\.)+)\w+)+$/;
      var emailIsValid = re.test(value)
      this.setState({
        emailIsValid: emailIsValid
      });
    }
  }

  static getComponentInstance(index, element, onClick, onChange, initialRender) {
    return <Textbox
      key={index}
      config={element.data}
      name={element.name}
      onClick={onClick}
      onChange={onChange}
      initialRender={initialRender}
    />;
  }

  render() {
    var { config, onChange, initialRender } = this.props;
    var star = config.required ? '*' : '';
    var required = config.required ? 'Required Field' : '';
    var invalid = !config.value && !initialRender && config.required && config.textboxState;
    var maximumLength = config.maxlength ? config.maxlength : 10000;
    var disabled = !config.textboxState;
    var classes = classNames({
      'invalid': invalid,
      'disabled': disabled,
      'emailInvalid': !this.state.emailIsValid && config.value,
      'form-control': true
    });
    return (
      <div className="row">
        <div className="col-md-4 form-style"><label htmlFor={config.name}>{config.label}{star}</label></div>
        <div className="col-md-8">
          <input
            type="text"
            maxLength={maximumLength}
            value={config.value}
            className={classes}
            onChange={onChange}
            onBlur={this._handleBlur}
            email={config.email}
            disabled={disabled}
          />
          {
            invalid ?
              <div className="required">Required Field</div> : null
          }
          {
            config.email && !this.state.emailIsValid && config.value ?
              <div className="required">Invalid Email Format</div> : null
          }
        </div>
      </div>
    );
  }
}

export default Textbox;
