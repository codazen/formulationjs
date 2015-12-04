'use strict';

import React from 'react';
import Checkbox from './Checkbox.react';
import Textbox from './Textbox.react';
import Dropdown from './Dropdown.react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      form: this.props.form
    };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.form);
  }

  _handleChange(index, type, e) {
    var form = this.state.form;
    form.elements[index].data.value = e.target[type];
    this.setState({
      form: form
    });
  }

  _handleToggle(index) {
    var form = this.state.form;
    form.elements[index].data.value = !form.elements[index].data.value;
    this.setState({
      form: form
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      form: nextProps.form
    });
  }

  render() {
    var form = this.state.form;
    return (
      <section>
        <h1>{form.name}</h1>
        <p>{form.body}</p>
        <form onSubmit={this._handleSubmit}>
          <div>
            {
              form.elements ?
              form.elements.map((element, index) => {
                var component;
                switch (element.type.toLowerCase()) {
                  case 'textbox':
                  component = <Textbox key={index} textbox={element.data} onChange={this._handleChange.bind(this, index, 'value')} />;
                    break;
                  case 'checkbox':
                  component = <Checkbox key={index} checkbox={element.data} onClick={this._handleToggle.bind(this, index)} onChange={this._handleChange.bind(this, index, 'checked')} />;
                    break;
                  case 'dropdown':
                  component = <Dropdown key={index} dropdown={element.data} onChange={this._handleChange.bind(this, index, 'value')} />;
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
      </section>
    );
  }
}

export default Form;
