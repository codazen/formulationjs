'use strict';

import React from 'react';
import Checkbox from './Checkbox.react';
import Textbox from './Textbox.react';
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
          <div>
            {
              form.textInputs ?
              form.textInputs.map(function(textInput, index) {
                return <Textbox key={index} options={textInput} />;
              })
              :
              null
            }
          </div>
          <div>
            {
              form.dropdowns ?
              form.dropdowns.map(function(dropdown, index) {
                return <Dropdown key={index} options={dropdown} />;
              })
              :
              null
            }
          </div>
          <div>
            {
              form.checkboxes ?
              form.checkboxes.map(function(checkbox, index) {
                return <Checkbox key={index} checkbox={checkbox} />;
              })
              :
              null
            }
          </div>
      </div>
    );
  }
}

export default Form;
