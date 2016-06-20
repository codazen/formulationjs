/*
Copyright (c) 2016 Codazen. 
This file is subject to the license terms in the LICENSE file in the top-level directory of this distribution and at https://github.com/codazen/formulationjs/blob/master/LICENSE.  
No part of FormulationJS, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the LICENSE file.
*/

'use strict';

import React from 'react';
import classNames from 'classnames';
import FormElement from './FormElement.react';

class Checkbox extends FormElement {

  constructor(props) {
    super(props);
  }

  // TODO Standardize event handlers (in FormElement) and initialize in a better way
  static getComponentInstance(index, element, onClick, onChange, initialRender) {
    return <Checkbox key={index}
      config={element.data}
      name={element.name}
      onClick={onClick}
      onChange={onChange}
      initialRender={initialRender}
    />;
  }

  render() {
    var { config, onChange, onClick, initialRender } = this.props;
    var star = config.required ? '*' : '';
    var required = config.required ? 'Required Field' : '';
    var invalid = config.value.length == 0 && !initialRender && config.required;
    //it is invalid if when you loop through all the checkbox options, it returns nothing
    //the part you need to change is config.value?
    var classes = classNames({
      'invalid' : invalid
    });
    return (
      <div className="row">
        <div className="col-md-4 form-style">{config.groupLabel}{star}</div>
        <div className="col-md-8">  {
            config.options.map(function (option, index) {
              return  (
                <div key={index}>
                  <label className="checkboxAlignment">
                    <input type="checkbox" value={option.value} onClick={onClick} /> {option.name}
                  </label>
                </div>
              );
            })
          }
          {
            invalid ?
            <div className="required">Required Field</div> : null
          }
        </div>

      </div>
    );
  }
}

export default Checkbox;
