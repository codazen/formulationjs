'use strict';

import React from 'react';
import Checkbox from './Checkbox.react';
import Textbox from './Textbox.react';
import Dropdown from './Dropdown.react';
import Submit from './Submit.react';

class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  _handleSubmit() {
    console.log(this.props.form);
  }

  render() {
    var form = this.props.form;
    return (
      <form onSubmit={this._handleSubmit}>
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
              form.checkboxes ?
              form.checkboxes.map(function(checkbox, index) {
                return <Checkbox key={index} checkbox={checkbox} />;
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
            <input type="submit" value="Submit" />
          </div>
      </form>
    );
  }
}

export default Form;
