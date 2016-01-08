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
    var classes = classNames({
      'invalid' : !textbox.value && !initialRender
    });
    return (
      <div>
        <label htmlFor={textbox.name}>{textbox.label}{star}</label>
        <input 
          type="text" 
          id={textbox.id} 
          name={textbox.name} 
          required={textbox.required} 
          maxLength={textbox.maxlength} 
          value={textbox.value} 
          className = {classes}
          onChange={onChange} 
        />
      </div>
    );
  }
}

export default Textbox;
