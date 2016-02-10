'use strict';
require('./styles/Textbox.less');

import React from 'react';
import classNames from 'classnames';

class Textbox extends React.Component {

  constructor(props) {
    super(props);
  }

  
  render() {
    var { textbox, onChange, initialRender } = this.props;
    var star = textbox.required ? '*' : '';
    var required = textbox.required ? 'Required Field' : '';
    var invalid = !textbox.value && !initialRender && textbox.required;

    var re = /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/;
    var emailInvalid = textbox.email && !initialRender && textbox.value && re.test(form.elements[index].data.value);

    var disabled = !textbox.textboxState;
    var classes = classNames({
      'invalid' : invalid,
      'disabled' : disabled,
    });
    return (
      <div>
        <label htmlFor={textbox.name}>{textbox.label}{star}</label>
          <input 
            type="text" 
            id={textbox.id} 
            name={textbox.name} 
            maxLength={textbox.maxlength}
            value={textbox.value} 
            className={classes}
            onChange={onChange} 
            email = {textbox.email}
          />
          {
            invalid ?
            <div className="required">Required Field</div> : null
          }
          {
            emailinvalid ?
            <div className="required">Invalid Email Format</div> : null
          }

      </div>
    );
  }
}

export default Textbox;
