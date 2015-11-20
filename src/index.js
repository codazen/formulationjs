'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.react';


var formDef = {
  name: 'My Form',
  dropdowns: [
    [
      { 
        name: 'California',
        value: 'CA'
      },
      {
        name: 'Alaska',
        value: 'AK'
      }
    ],
    [
      { 
        name: 'California',
        value: 'CA'
      },
      {
        name: 'Alaska',
        value: 'AK'
      }
    ]
  ],
  textInputs: []
};

ReactDOM.render(
  <Form form={formDef} />,
  document.getElementById('mount')
);
