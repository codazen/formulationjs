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
