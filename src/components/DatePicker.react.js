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
require('react-datepicker/dist/react-datepicker.css');
require('./styles/DatePicker.less');

import React from 'react';
import classNames from 'classnames';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';

class DatePicker extends React.Component {

  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    var { onChange, index } = this.props;
    onChange(index, e);
  }

  render() {
    var { datepicker, initialRender } = this.props;
    return (
      <div className="row">
        <div className="col-md-4">{datepicker.label}</div>
        <div className="col-md-8">
          <ReactDatePicker 
            selected={datepicker.value} 
            onChange={this._handleChange}
            showYearDropdown
            dateFormat={datepicker.dateFormat}
            placeholderText={datepicker.placeholderText}
          />
        </div>
      </div>
    );
  }
}

export default DatePicker;
