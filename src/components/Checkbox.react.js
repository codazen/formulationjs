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
        {checkbox.groupLabel}
          {
            checkbox.options.map(function (option, index) {
              return  (
                <div>
                  <label>
                    <input type="checkbox" key={index} name={name} value={option.value} onClick={onClick} />{option.name}
                  </label>
                </div>
              );
            })
          }
      </div>
    );
  }
}

export default Checkbox;
