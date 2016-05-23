'use strict';

require('./css/FormFiddleWrapper.less');

import React from 'react';
import Form from '../../../../src/components/Form.react';
import Fiddle from '../Fiddle/Fiddle.react';

class FormFiddleWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      form: this.props.form
    };
    this.fiddleSubmit = this.fiddleSubmit.bind(this);
  }

  fiddleSubmit(json) {
    this.setState({
      form: json
    });
  }

  render() {
    var { form } = this.state;
    return (
      <div className="wrapper">
        <div className="panel left">
          <Form form={form} />
        </div>
        <div className="panel">
          <Fiddle json={form} fiddleSubmit={this.fiddleSubmit} />
        </div>
      </div>
    );
  }
}

export default FormFiddleWrapper;
