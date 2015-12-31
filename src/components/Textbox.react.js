'use strict';

import React from 'react';

class Textbox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var { textbox, onChange } = this.props;
    return (
      <div>
        <label htmlFor={textbox.name}>{textbox.label}</label>
        <input type="text" id={textbox.id} name={textbox.name} required={textbox.required} maxLength={textbox.maxlength} value={textbox.value} onChange={onChange} />
      </div>
    );
  }
}

export default Textbox;
