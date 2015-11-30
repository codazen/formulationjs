'use strict';

import React from 'react';

class Submit extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    //var options = this.props.options;
    return (
      <div>
        <input type="submit" value="Submit" />
      </div>
    );
  }
}

export default Submit;
