'use strict';

import React from 'react';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
  }
  
  
  //getInitialState:function(){
  //  return {selectedValue:'Option 1'}
  //}

  render() {
    var options = this.props.options;
    return (
      <div>
        <select>
          {
            options.map(function (option, index) {
              return <option key={index} value={option.value}>{option.name}</option>;
            })
          }
        </select>
      </div>
    );
  }
}

export default Dropdown;
