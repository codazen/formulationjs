'use strict';

import React from 'react';
import Checkbox from './Checkbox.react';
import Textbox from './Textbox.react';
import Dropdown from './Dropdown.react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log(this.props.form);
  }

  render() {
    var form = this.props.form;
    return (
      <form onSubmit={this._handleSubmit}>
        <h3>{form.name}</h3>
        <p>{form.body}</p>
          <div>
            {
              form.elements ?
              form.elements.map(function(element, index) {
                var component;
                switch (element.type.toLowerCase()) {
                  case 'textbox':
                    component = <Textbox key={index} textbox={element.data} />;
                    break;
                  case 'checkbox':
                    component = <Checkbox key={index} checkbox={element.data} />;
                    break;
                  case 'dropdown':
                    component = <Dropdown key={index} options={element.data} />;
                    break;
                  default:
                    break;
                }
                return component;
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
