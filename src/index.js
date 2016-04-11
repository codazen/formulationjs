/*
Copyright (c) 2016 Codazen. 
This file is subject to the license terms in the LICENSE file in the top-level directory of this distribution and at https://github.com/codazen/formulationjs/blob/master/LICENSE.  
No part of FormulationJS, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the LICENSE file.
*/

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
