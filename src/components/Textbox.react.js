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
        </div>
          {
            invalid ?
            <div className="required">Required Field</div> : null
          }
          {
            textbox.email && !this.state.emailIsValid && textbox.value ?
            <div className="required">Invalid Email Format</div> : null
          }

      </div>
    );
  }
}

export default Textbox;
