'use strict';

import React from 'react';
import Checkbox from './Checkbox.react';
import Textbox from './Textbox.react';
import Dropdown from './Dropdown.react';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      form: this.props.form,
      initialRender: true
    };
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleSubmitClick = this._handleSubmitClick.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.form);
    console.log("User clicked submit at: " + Date());
  }

  _handleSubmitClick(e) {
    this.setState({
      initialRender: false
    })
  }

  _handleChange(index, type, e) {
    var form = this.state.form;
    form.elements[index].data.value = e.target[type];
    this.setState({
      form: form
    });
  }

  _handleToggle(index, type, e) {
    var form = this.state.form;
    switch(e.target[type]){
      case true:
      form.elements[index].data.value.push(e.target['value']);
        break
      case false:
      for (var i=0; i<form.elements[index].data.value.length; i++){
        if (form.elements[index].data.value[i] == e.target['value']){
          form.elements[index].data.value.splice(i, 1)
        }
      }
        break
      default:
      break;
    }
    //console.log(form.elements[index].data.value);
    this.setState({
      form: form
    });
  }

  componentDidMount() {
    this.setState({
      initialRender: true
    })
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
        <form onSubmit={this._handleSubmit} noValidate>
          <div>
            {
              form.elements ?
              form.elements.map((element, index) => {
                var component;
                switch (element.type.toLowerCase()) {
                  case 'textbox':
                  component = <Textbox key={index} textbox={element.data} onChange={this._handleChange.bind(this, index, 'value')} initialRender={this.state.initialRender}/>;
                    break;
                  case 'checkbox':
                  component = <Checkbox key={index} checkbox={element.data} name={element.name} onClick={this._handleToggle.bind(this, index, 'checked')} onChange={this._handleChange.bind(this, index, 'checked')} />;
                    break;
                  case 'dropdown':
                    if (element.placeholder){
                    component = <Dropdown key={index} dropdown={element.data} placeholder={element.placeholder} onChange={this._handleChange.bind(this, index, 'value')} initialRender={this.state.initialRender} />;
                  }
                    else{
                      component = <Dropdown key={index} dropdown={element.data} onChange={this._handleChange.bind(this, index, 'value')} />;
                    }
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
            <input type="submit" value="Submit" onClick={this._handleSubmitClick} />
          </div>
        </form>
      </section>
    );
  }
}

export default Form;
