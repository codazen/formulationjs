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
        <form>
          {
            dropdown.options.map(function (option, index) {
              return <input type="checkbox" key={index} value={option.value} checked={option.default} name={option.name} onChange={onChange}/>
            })
          }
        </form>
      </div>
    );
  }
}

export default Checkbox;
