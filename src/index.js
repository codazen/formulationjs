'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.react';

class Formulation {

  constructor(formDef) {
    this.formDef = formDef;
  }

  render(mountId) {

    ReactDOM.render(
      <Form form={this.formDef} />,
      document.getElementById(mountId)
    );
  }
}

export default Formulation;