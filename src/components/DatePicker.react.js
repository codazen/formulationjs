'use strict';

import React from 'react';
import classNames from 'classnames';
//import DatePicker from 'react-datepicker';
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
        
      </div>
    );
  }
}

export default DatePicker;
