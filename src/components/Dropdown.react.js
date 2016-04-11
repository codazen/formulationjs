/*The MIT License (MIT)

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

'use strict';
require('./styles/Dropdown.less');

import React from 'react';
import classNames from 'classnames';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var {placeholder, dropdown, onChange, initialRender } = this.props;
    var star = dropdown.required ? '*' : '';
    var required = dropdown.required ? 'Required Field' : '';
    var invalid = !dropdown.value && !initialRender && dropdown.required;
    var classes = classNames({
      'invalid' : invalid
    });

    return (
      <div className="row">
        <div className="col-md-4"><label htmlFor={dropdown.name}>{dropdown.label}{star}</label></div>
        <div className="col-md-8">
          <select value={dropdown.value} onChange={onChange} className={classes}>
            <option value="">{placeholder}</option>
            {
              dropdown.options.map(function (option, index) {
                return <option key={index} value={option.value}>{option.name}</option>
              })
            }
          </select>
          {
            invalid ?
            <div className="required">Required Field</div> : null
          }
        </div>
      </div>
    );
  }
}

export default Dropdown;
