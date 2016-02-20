'use strict';
require('./styles/Textarea.less');

import React from 'react';
import classNames from 'classnames';

class Textarea extends React.Component {

  constructor(props) {
    super(props);
  }

  
  render() {
    var { textarea, onChange, initialRender } = this.props;
    var star = textarea.required ? '*' : '';
    var required = textarea.required ? 'Required Field' : '';
    var invalid = !textarea.value && !initialRender && textarea.required;
    var disabled = !textarea.textareaState;
    var classes = classNames({
      'invalid' : invalid,
      'disabled' : disabled
    });
    return (
      <div>
        <label htmlFor={textarea.name}>{textarea.label}{star}
          <textarea 
            type="textarea" 
            id={textarea.id} 
            name={textarea.name} 
            maxLength={textarea.maxlength}
            value={textarea.value} 
            className={classes}
            onChange={onChange} 
          />
        </label>
          {
            invalid ?
            <div className="required">Required Field</div> : null
          }
      </div>
    );
  }
}

export default Textarea;
