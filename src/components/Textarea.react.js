/*
Copyright (c) 2016 Codazen. 
This file is subject to the license terms in the LICENSE file in the top-level directory of this distribution and at https://github.com/codazen/formulationjs/blob/master/LICENSE.  
No part of FormulationJS, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the LICENSE file.
*/

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
      <div className="row">
        <div className="col-md-4 form-style"><label htmlFor={textarea.name}>{textarea.label}{star}</label></div>
        <div className="col-md-8">
          <textarea 
            type="textarea" 
            id={textarea.id} 
            name={textarea.name} 
            maxLength={textarea.maxlength || 10000}
            value={textarea.value} 
            className={classes}
            onChange={onChange} 
          />
          {
            invalid ?
            <div className="required">Required Field</div> : null
          }
        </div>
      </div>
    );
  }
}

export default Textarea;
