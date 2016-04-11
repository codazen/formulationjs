"use strict";

const fs = require('fs');
const prependFile = require('prepend-file');

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
