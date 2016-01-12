'use strict';

import React from 'react';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var {placeholder, dropdown, onChange } = this.props;
    var star = dropdown.required ? '*' : '';
    return (
      <div>
        <label htmlFor={dropdown.name}>{dropdown.label}{star}</label>
        <select value={dropdown.value} onChange={onChange}>
          <option value="">{placeholder}</option>
          {
            dropdown.options.map(function (option, index) {
              return <option key={index} value={option.value}>{option.name}</option>
            })
          }
        </select>
      </div>
    );
  }
}

export default Dropdown;
