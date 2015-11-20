'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.react';


var formDef = {
  name: 'My Form',
  checklist: [
    [
      { 
        name: 'Irvine',
        value: '92612'
      },
      {
        name: 'Oxnard',
        value: '93030'
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
