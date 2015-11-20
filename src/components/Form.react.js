'use strict';

import React from 'react';
import Dropdown from './Dropdown.react';

class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var form = this.props.form;
    return (
      <div>
        <h3>{form.name}</h3>
        {
          form.dropdowns ? 
          form.dropdowns.map(function(dropdown, index) {
            return <Dropdown key={index} options={dropdown} />;
          })
          :
          null
        }
      </div>
    );
  }
}

export default Form;
