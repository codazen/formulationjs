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
require('./styles/Checkbox.less');

import React from 'react';
import classNames from 'classnames';

class Checkbox extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    var { checkbox, onChange, onClick, name, initialRender } = this.props;
    var star = checkbox.required ? '*' : '';
    var required = checkbox.required ? 'Required Field' : '';
    var invalid = checkbox.value.length == 0 && !initialRender && checkbox.required;
    //it is invalid if when you loop through all the checkbox options, it returns nothing
    //the part you need to change is checkbox.value?
    var classes = classNames({
      'invalid' : invalid
    });
    return (
      <div className="row">
        <div className="col-md-4">{checkbox.groupLabel}{star}</div>
        <div className="col-md-8">  {
            checkbox.options.map(function (option, index) {
              return  (
                <div key={index}>
                  <label className="checkboxAlignment">
                    <input type="checkbox" name={name} value={option.value} onClick={onClick} />{option.name}
                  </label>
                </div>
              );
            })
          }
          {
            invalid ?
            <div className="required">Required Field</div> : null
          }
        </div>

      </div>
    );
  }
}

export default Checkbox;
