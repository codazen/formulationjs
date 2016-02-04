'use strict';

require('react-datepicker/dist/react-datepicker.css');

import React from 'react';
import classNames from 'classnames';
import ReactDatePicker from 'react-datepicker';
import moment from 'moment';

class DatePicker extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var { datepicker, onChange, initialRender } = this.props;
    var startDate = moment();
    return (
      <div>
        <ReactDatePicker selected={startDate} onChange={onChange} />
      </div>
    );
  }
}

export default DatePicker;
