/*
Copyright (c) 2016 Codazen. 
This file is subject to the license terms in the LICENSE file in the top-level directory of this distribution and at https://github.com/codazen/formulationjs/blob/master/LICENSE.  
No part of FormulationJS, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the LICENSE file.
*/

'use strict';

jest.dontMock('../Textbox.react.js');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Textbox from '../Textbox.react';

describe('Textbox', () => {
  //placeholder test case. TODO: create actual test cases
  it('should be an element', () => {

    expect(TestUtils.isElement(<Textbox />)).toEqual(true);
  });
});
