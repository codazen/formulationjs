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
        <select value={dropdown.value} onChange={onChange}>
          {
            dropdown.options.map(function (option, index) {
              switch (option.default){
                case false:
                return <option key={index} value={option.value}>{option.name}</option>;
                break

                case true:
                return <option key={index} value={option.value} selected="selected">{option.name}</option>;
                break

                default:
                return <option key={index} value={option.value}>{option.name}</option>;
                break;
              }
            })
          }
        </select>
      </div>
    );
  }
}

export default Dropdown;
