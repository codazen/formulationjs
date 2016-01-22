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
    var disabled = !textbox.textboxState;
    var classes = classNames({
      'invalid' : invalid,
      'disabled' : disabled
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
          />
          {
            invalid ?
            <div className="required">Required Field</div> : null
          }
      </div>
    );
  }
}

export default Textbox;
