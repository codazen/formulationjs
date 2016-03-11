'use strict';
require('./styles/Textbox.less');
global.jQuery = require('jquery');
require('bootstrap');

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

    var disabled = !textbox.textboxState;
    var classes = classNames({
      'invalid' : invalid,
      'disabled' : disabled,
      'emailInvalid' : !this.state.emailIsValid
    });
    return (
      <div>
        <label htmlFor={textbox.name}>{textbox.label}{star}
          <input
            type="text"
            id={textbox.id}
            name={textbox.name}
            maxLength={textbox.maxlength}
            value={textbox.value}
            className={classes}
            onChange={onChange}
            onBlur={this._handleBlur}
            email = {textbox.email}
          />
        </label>
          {
            invalid ?
            <div className="required">Required Field</div> : null
          }
          {
            textbox.email && !this.state.emailIsValid ?
            <div className="required">Invalid Email Format</div> : null
          }

      </div>
    );
  }
}

export default Textbox;
