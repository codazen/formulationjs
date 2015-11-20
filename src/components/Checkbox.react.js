'use strict';

import React from 'react';

class Checkbox extends React.Component {

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
        <label>Check Label</label>
        <br />
          {
            options.map(function (option, index) {
              return <input type="checkbox" key={index} value={option.value}>{option.name}</input>;
            })
          }
      </div>
    );
  }
}

export default Checkbox;
