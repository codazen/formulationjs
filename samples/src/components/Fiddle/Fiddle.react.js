'use strict';

require('./css/Fiddle.less');

import React from 'react';

class Fiddle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      json: this.props.json
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(e) {
    this.setState({
      json: JSON.parse(e.target.value)
    });     
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.props.fiddleSubmit(this.state.json);
  }

  render() {
    var json = this.state.json;
    var pretty = JSON.stringify(json, null, 2);
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <textarea value={pretty} onChange={this._handleChange} className="fiddle" />
          <input type="submit" value="Change!" className="formChange"/>
        </form>
      </div>
    );
  }
}

export default Fiddle;
