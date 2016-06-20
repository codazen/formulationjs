/*
 Copyright (c) 2016 Codazen.
 This file is subject to the license terms in the LICENSE file in the top-level directory of this distribution and at https://github.com/codazen/formulationjs/blob/master/LICENSE.  
 No part of FormulationJS, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the LICENSE file.
 */

'use strict';

import React from 'react';
import classNames from 'classnames';

class FormElement extends React.Component {

  constructor(props) {
    super(props);
  }

  static getComponentInstance(index, element, onClick, onChange, initialRender) {
    console.error('getComponentInstance must be implemented by form elements');
  }

  render () {
    super.render();
  }

  validate () {
    console.log('Not implemented yet');
  }

  getData () {
    console.log('Not implemented yet');
  }

  setData () {
    console.log('Not implemented yet');
  }

  initialRender() {
    super.initialRender();
  }

}

export default FormElement;