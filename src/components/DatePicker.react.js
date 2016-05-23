/*
Copyright (c) 2016 Codazen. 
This file is subject to the license terms in the LICENSE file in the top-level directory of this distribution and at https://github.com/codazen/formulationjs/blob/master/LICENSE.  
No part of FormulationJS, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the LICENSE file.
*/

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
    const { datepicker, initialRender } = this.props;
    const star = datepicker.required ? '*' : '';
    var invalid = !datepicker.value && !initialRender && datepicker.required;
    var classes = classNames({
      'invalid' : invalid
    });
    return (
      <div className="row">
        <div className="col-md-4 form-style">{datepicker.label + star}</div>
        <div className="col-md-8">
          <ReactDatePicker 
            selected={datepicker.value} 
            onChange={this._handleChange}
            className={classes}
            showYearDropdown
            dateFormat={datepicker.dateFormat}
            placeholderText={datepicker.placeholderText}
          />
          {
            invalid ? <div className="required">Required Field</div> : null
          }
        </div>
      </div>
    );
  }
}

export default DatePicker;
