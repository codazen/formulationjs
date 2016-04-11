"use strict";

const fs = require('fs');
const prependFile = require('prepend-file');

<<<<<<< HEAD
const License = (`/*
Copyright (c) 2016 Codazen. 
This file is subject to the license terms in the LICENSE file in the top-level directory of this distribution and at https://github.com/codazen/formulationjs/blob/master/LICENSE.  
No part of FormulationJS, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the LICENSE file.
*/
=======
const License = (`/*The MIT License (MIT)

Copyright (c) 2016 Codazen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.*/
>>>>>>> 6f2c41c5be1c9b3d83e041fb1c3a3257a157504b

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
