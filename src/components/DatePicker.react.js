'use strict';

require('react-datepicker/dist/react-datepicker.css');

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
      <div>
        {datepicker.label}
        <ReactDatePicker 
          selected={datepicker.value} 
          onChange={this._handleChange}
          dateFormat={datepicker.dateFormat}
          maxLength={datepicker.maxlength}
          placeholderText={datepicker.placeholderText}
        />
      </div>
    );
  }
}

export default DatePicker;
