'use strict';

import React from 'react';

class Textbox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var options = this.props.options;
    return (
      <div>
        <label htmlFor={options.name}>{options.label}</label>
        <input type="text" id={options.id} name={options.name} defaultValue={options.value} />
      </div>
    );
  }
}

export default Textbox;
