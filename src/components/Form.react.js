'use strict';
require('./styles/Form.less');

import React from 'react';
import Checkbox from './Checkbox.react';
import Textbox from './Textbox.react';
import Dropdown from './Dropdown.react';
import classNames from 'classnames';

class Form extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      form: this.props.form,
      initialRender: true
    };
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleSubmit(e) {
    e.preventDefault();
    if (this.state.initialRender) {
      this.setState({
        initialRender: false
      });
    }
    if (this._componentsValid(this.state.form)) { //& the required true
      console.log(this.state.form);
      console.log("User clicked submit at: " + Date());
    }
  }

  _componentsValid(form) {
    //if true don't return until end, if false stop right away
    for(var x in form.elements) {
      var element = form.elements[x];
      switch(element.type) {
        case 'textbox':
          if (!element.data.value && element.data.required) {
            return false;
          }
          break;
        case 'dropdown':
          if (!element.data.value && element.data.required) {
            return false;
          }
          break;
        case 'checkbox':
          if (element.data.value.length == 0 && element.data.required) {
            return false;
          }
          break;
      }
    }
    return true;
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

  //_handleMouseHover() {
    //if (this._handleMouseEnter) {
    //  return true;//form.submitHover = true;
    //} else {
    //  return false;//form.submitHover = false;
    //}
  //  return false;
    
  //}
  
  _handleMouseEnter(form) {
    console.log("Entering");
    form.submitHover = true;//return true;
  }

  _handleMouseLeave(form) {
    console.log("Leaving");
    //console.log(this.form.submit.submitHover);
    form.submitHover = false;
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
  
  //Using noValidate will allow the data to be submitted at all times...
  render() {
    var form = this.state.form;
    var enabled = form.submitState;
    var disabled = form.submitState;
    switch (form.submitState) {
      case 'enabled':
        enabled = true;
        disabled = false;
        break;
      case 'disabled':
        enabled = false;
        disabled = true;
        break;
      default:
        break;
    }
    var hovered = form.submitHover;//this._handleMouseHover();
    var classes = classNames({
      'enabled' : enabled,
      'hovered': hovered //setting this to true or false allows for the hovered state
    });
    return (
      <section>
        <h1 style={{ wordWrap: 'break-word' }}>{form.name}</h1>
        <p style={{ wordWrap: 'break-word' }}>{form.body}</p>
        <form onSubmit={this._handleSubmit}>
          <div>
            {
              form.elements ?
              form.elements.map((element, index) => {
                var component;
                switch (element.type.toLowerCase()) {
                  case 'textbox':
                  component = <Textbox key={index} textbox={element.data} onChange={this._handleChange.bind(this, index, 'value')} initialRender={this.state.initialRender} />;
                    break;
                  case 'checkbox':
                  component = <Checkbox key={index} checkbox={element.data} name={element.name} onClick={this._handleToggle.bind(this, index, 'checked')} onChange={this._handleChange.bind(this, index, 'checked')} initialRender={this.state.initialRender} />;
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
            <input className={classes} onMouseEnter={this._handleMouseEnter} onMouseLeave={this._handleMouseLeave} type="submit" value="Submit" />
          </div>
        </form>
      </section>
    );
  }
}

export default Form;
