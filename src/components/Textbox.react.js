'use strict';
require('./styles/Textbox.less');

import React from 'react';

class Textbox extends React.Component {

  constructor(props) {
    super(props);
  }

  
  render() {
    var { textbox, onChange } = this.props;
    var star = textbox.required ? '*' : '';
    return (
      <div>
        <label htmlFor={textbox.name}>{textbox.label}{star}</label>
        <input type="text" id={textbox.id} name={textbox.name} required={textbox.required} maxLength={textbox.maxlength} value={textbox.value} onChange={onChange} />
      </div>
    );
  }
}

export default Textbox;
