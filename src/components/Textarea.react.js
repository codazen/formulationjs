/*
 Copyright (c) 2016 Codazen.
 This file is subject to the license terms in the LICENSE file in the top-level directory of this distribution and at https://github.com/codazen/formulationjs/blob/master/LICENSE.  
 No part of FormulationJS, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the LICENSE file.
 */

'use strict';

import React from 'react';
import classNames from 'classnames';
import FormElement from './FormElement.react';

class Textarea extends FormElement {

  constructor(props) {
    super(props);
  }

  static getComponentInstance(index, element, onClick, onChange, initialRender) {
    return <Textarea
      key={index}
      config={element.data}
      name={element.name}
      onClick={onClick}
      onChange={onChange}
      initialRender={initialRender}
    />;
  }

  render() {
    var { config, onChange, initialRender } = this.props;
    var star = config.required ? '*' : '';
    var required = config.required ? 'Required Field' : '';
    var invalid = !config.value && !initialRender && config.required && config.textareaState;
    var disabled = !config.textareaState;
    var classes = classNames({
      'invalid': invalid,
      'disabled': disabled
    });
    return (
      <div className="row">
        <div className="col-md-4 form-style"><label htmlFor={config.name}>{config.label}{star}</label></div>
        <div className="col-md-8">
          <config
            type="textarea"
            maxLength={config.maxlength || 10000}
            value={config.value}
            className={classes}
            onChange={onChange}
            disabled={disabled}
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
