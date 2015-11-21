'use strict';

import React from 'react';

class Checkbox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checkbox.value
    }
    this._onChange = this._onChange.bind(this);
    this._labelClick = this._labelClick.bind(this);
  }

  _onChange() {
    this.setState({
      checked: !this.state.checked
    });
  }

  _labelClick() {
    this._onChange();
  }
  
  render() {
    var checkbox = this.props.checkbox;
    return (
      <div>
        <label htmlFor={checkbox.name} onClick={this._labelClick}>{checkbox.label}</label>
        <input type="checkbox" checked={this.state.checked} name={checkbox.name} onChange={this._onChange}/>
      </div>
    );
  }
}

export default Checkbox;
