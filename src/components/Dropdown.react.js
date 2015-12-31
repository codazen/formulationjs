'use strict';

import React from 'react';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var { dropdown, onChange } = this.props;
    return (
      <div>
        <select value={dropdown.value} required={dropdown.required} onChange={onChange}>
          {
            dropdown.options.map(function (option, index) {
              return <option key={index} value={option.value}>{option.name}</option>;
            })
          }
        </select>
      </div>
    );
  }
}

export default Dropdown;
