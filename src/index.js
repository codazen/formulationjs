'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.react';


var formDef = {
  name: 'My Form',
  dropdown: [1,2,3]
};

ReactDOM.render(
  <Form form={formDef} />,
  document.getElementById('mount')
);
