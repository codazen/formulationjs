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
      <div>
        {datepicker.label}
        <ReactDatePicker 
          selected={datepicker.value} 
          onChange={this._handleChange}
          showYearDropdown
          dateFormat={datepicker.dateFormat}
          placeholderText={datepicker.placeholderText}
        />
      </div>
    );
  }
}

export default DatePicker;
