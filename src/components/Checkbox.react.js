'use strict';

import React from 'react';

class Checkbox extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    var { checkbox, onChange, onClick } = this.props;
    return (
      <div>
        <label htmlFor={checkbox.name} onClick={onClick}>{checkbox.label}</label>
        <input type="checkbox" checked={checkbox.value} name={checkbox.name} onChange={onChange}/>
      </div>
    );
  }
}

export default Checkbox;
