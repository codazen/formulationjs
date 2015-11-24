'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../../../src/components/Form.react';
import Fiddle from '../../src/components/Fiddle/Fiddle.react';
import FormFiddleWrapper from '../../src/components/FormFiddleWrapper/FormFiddleWrapper.react';
import formDef from './forms/formDef.json';

ReactDOM.render(
  <FormFiddleWrapper form={formDef}/>,
  document.getElementById('sample-1')
);
