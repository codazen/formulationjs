'use strict';

import React from 'react';
import Checkbox from './Checkbox.react';
import Textbox from './Textbox.react';

class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var form = this.props.form;
    return (
      <div>
        <h3>{form.name}</h3>
        {
          form.textInputs ?
          form.textInputs.map(function(textInput, index) {
            return <Textbox key={index} options={textInput} />;
          })
          
          :
          null
        }
      </div>
    );
  }
}

export default Form;
