/*The MIT License (MIT)

Copyright (c) 2016 Codazen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/

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
    var invalid = !textbox.value && !initialRender && textbox.required;
    var maximumLength = textbox.maxlength ? textbox.maxlength : 524288;

    var disabled = !textbox.textboxState;
    var classes = classNames({
      'invalid' : invalid,
      'disabled' : disabled,
      'emailInvalid' : !this.state.emailIsValid && textbox.value
    });
    return (
      <div className="row">
        <div className="col-md-4"><label htmlFor={textbox.name}>{textbox.label}{star}</label></div>
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
          />
          {
            invalid ?
            <div className="required">Required Field</div> : null
          }
        </div>

          {
            textbox.email && !this.state.emailIsValid && textbox.value ?
            <div className="required">Invalid Email Format</div> : null
          }

      </div>
    );
  }
}

export default Textbox;
