'use strict';
//require('./styles/DatePicker.less');

import React from 'react';
import classNames from 'classnames';

class DatePicker extends React.Component {

  constructor(props) {
    super(props);
  }

  
  render() {
    var { datepicker, onChange, initialRender } = this.props;
    return (
      <div>
        <DatePicker
        selected={this.state.startDate}
        onChange={onChange} />
      </div>
    );
  }
}

export default datepicker;
