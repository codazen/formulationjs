'use strict';

import React from 'react';

class Textbox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var textbox = this.props.textbox;
    return (
      <div>
        <label htmlFor={textbox.name}>{textbox.label}</label>
        <input type="text" id={textbox.id} name={textbox.name} defaultValue={textbox.value} />
      </div>
    );
  }
}

export default Textbox;
