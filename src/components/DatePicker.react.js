/*
 Copyright (c) 2016 Codazen.
 This file is subject to the license terms in the LICENSE file in the top-level directory of this distribution and at https://github.com/codazen/formulationjs/blob/master/LICENSE.  
 No part of FormulationJS, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the LICENSE file.
 */

'use strict';

import React from 'react';
import classNames from 'classnames';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';
import FormElement from './FormElement.react';

class DatePicker extends FormElement {

  constructor(props) {
    super(props);
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(e) {
    var { onChange, index } = this.props;
    onChange(index, e);
  }

  static getComponentInstance(index, element, onClick, onChange, initialRender) {
    return <DatePicker
      key={index}
      config={element.data}
      name={element.name}
      onClick={onClick}
      onChange={onChange}
      initialRender={initialRender}
    />;
  }

  render() {
    const { config, initialRender } = this.props;
    const star = config.required ? '*' : '';
    var invalid = !config.value && !initialRender && config.required;
    var classes = classNames({
      'invalid': invalid
    });
    return (
      <div className="row">
        <div className="col-md-4 form-style">{config.label + star}</div>
        <div className="col-md-8">
          <ReactDatePicker
            selected={config.value}
            onChange={this._handleChange}
            className={classes}
            showYearDropdown
            dateFormat={config.dateFormat}
            placeholderText={config.placeholderText}
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
