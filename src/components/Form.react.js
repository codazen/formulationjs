'use strict';

import React from 'react';
import Dropdown from './Dropdown.react';

class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var form = this.props.form;
    return (
      <div>
        <h3>My Form</h3>
      </div>
    );
  }
}

export default Form;
