'use strict';

import React from 'react';

class Textbox extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var { textbox, onChange } = this.props;
    return (
      <div>
        <label htmlFor={textbox.name}>{textbox.label}</label>
<<<<<<< HEAD
        <input type="text" id={textbox.id} name={textbox.name} required={textbox.required} value={textbox.value} onChange={onChange} />
=======
        <input type="text" id={textbox.id} name={textbox.name} maxLength={textbox.maxlength} value={textbox.value} onChange={onChange} />
>>>>>>> master
      </div>
    );
  }
}

export default Textbox;
