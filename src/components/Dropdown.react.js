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
    return (
      <div>
        <select>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
    );
  }
}

export default Dropdown;
