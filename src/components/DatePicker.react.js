'use strict';

require('react-datepicker/dist/react-datepicker.css');

import React from 'react';
import classNames from 'classnames';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';

class DatePicker extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      //datepicker: this.props.DatePicker
      startDate: null
    };
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(date) {}

  render() {
    var { datepicker, onChange, initialRender } = this.props;
    return (
      <div>
        {datepicker.label}
        <ReactDatePicker 
          selected={this.state.startDate} 
          onChange={onChange}
          value={datepicker.value}
          dateFormat={datepicker.dateFormat}
          maxLength={datepicker.maxlength}
          placeholderText={datepicker.placeholderText}/>
      </div>
    );
  }
}

export default DatePicker;
