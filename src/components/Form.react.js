'use strict';

import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var form = this.props.form;
    return (
      <div>
        <h1>{form.name}</h1>
      </div>
    );
  }
}

export default Form;
