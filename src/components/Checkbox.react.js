'use strict';

import React from 'react';

class Checkbox extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    var { checkbox, onChange, onClick, name } = this.props;
    return (
      <div>
        <label htmlFor={checkbox.name} onClick={onClick}>{checkbox.label}</label>
          {
            checkbox.options.map(function (option, index) {
              return  (
                <label>
                  <input type="checkbox" key={index} name={name} value={option.value} onClick={onClick} />{option.name}
                  <br />
                </label>
              );
            })
          }
      </div>
    );
  }
}

export default Checkbox;
