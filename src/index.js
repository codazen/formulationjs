'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.react';
import formDef from '../dist/formDefinition.json';

ReactDOM.render(
  <Form form={formDef} />,
  document.getElementById('mount')
);
