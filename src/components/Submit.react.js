'use strict';

import React from 'react';

class Submit extends React.Component {

  constructor(props) {
    super(props);
  }

  _handleSubmit() {
    console.log("Your information has been submitted.");
  }

  render() {
    //var options = this.props.options;
    return <input type="submit" onClick={this._handleSubmit}/>
  }
}

export default Submit;
