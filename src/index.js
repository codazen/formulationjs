'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.react';


var formDef = {
  name: 'My Form',
  textInputs: [
    {
      label: 'First Name',
      id: 'first-name',
      name: 'first-name',
      value: 'Jeff'
    },
    {
      label: 'Last Name',
      id: 'last-name',
      name: 'last-name',
      value: 'Winger'
    }
  ]
};

ReactDOM.render(
  <Form form={formDef} />,
  document.getElementById('mount')
);
