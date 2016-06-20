'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Formulation from '../../../src';
import FormulationTest from '../../src';
import formDef from './forms/formDef.json';

var form = new FormulationTest(formDef);
form.render('sample-1');
