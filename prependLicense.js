"use strict";

const fs = require('fs');
const prependFile = require('prepend-file');

const License = (`/*
Copyright (c) 2016 Codazen. 
This file is subject to the license terms in the LICENSE file in the top-level directory of this distribution and at https://github.com/codazen/formulationjs/blob/master/LICENSE.  
No part of FormulationJS, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the LICENSE file.
*/

`)

const srcDir = './src/';
const componentsDir = './src/components/';
const stylesDir = './src/components/styles/';
const testDir = './src/components/__tests__/'

fs.readdirSync(srcDir).forEach(file => {
  if(file.slice(-3) === ".js") {
    prependFile(srcDir + file, License, (err) => {
      if (err) {
        // Error 
        console.log(err);
      }
      // Success 
      console.log('The "data to prepend" was prepended to file!');
    });
  }
});

fs.readdirSync(componentsDir).forEach(file => {
  if(file.slice(-3) === ".js") {
    prependFile(componentsDir + file, License, (err) => {
      if (err) {
        // Error 
        console.log(err);
      }
      // Success 
      console.log('The "data to prepend" was prepended to file!');
    });
  }
});

fs.readdirSync(stylesDir).forEach(file => {
  if(file.slice(-5) === ".less") {
    prependFile(stylesDir + file, License, (err) => {
      if (err) {
        // Error 
        console.log(err);
      }
      // Success 
      console.log('The "data to prepend" was prepended to file!');
    });
  }
});

fs.readdirSync(testDir).forEach(file => {
  if(file.slice(-3) === ".js") {
    prependFile(testDir + file, License, (err) => {
      if (err) {
        // Error 
        console.log(err);
      }
      // Success 
      console.log('The "data to prepend" was prepended to file!');
    });
  }
});
