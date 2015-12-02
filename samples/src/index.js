'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Formulation from '../../src';
import FormFiddleWrapper from './components/FormFiddleWrapper/FormFiddleWrapper.react';

class FormulationTest extends Formulation {

  constructor(formDef) {
    super(formDef);
  }

  render(mountId) {

    ReactDOM.render(
      <FormFiddleWrapper form={this.formDef} />,
      document.getElementById(mountId)
    );
  }
}

export default FormulationTest;
