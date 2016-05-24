/*
Copyright (c) 2016 Codazen. 
This file is subject to the license terms in the LICENSE file in the top-level directory of this distribution and at https://github.com/codazen/formulationjs/blob/master/LICENSE.  
No part of FormulationJS, including this file, may be copied, modified, propagated, or distributed except according to the terms contained in the LICENSE file.
*/

'use strict';

import React from 'react';
import classNames from 'classnames';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var {placeholder, dropdown, onChange, initialRender } = this.props;
    var star = dropdown.required ? '*' : '';
    var required = dropdown.required ? 'Required Field' : '';
    var invalid = !dropdown.value && !initialRender && dropdown.required;
    var classes = classNames({
      'invalid' : invalid
    });

    return (
      <div className="row">
        <div className="col-md-4 form-style"><label htmlFor={dropdown.name}>{dropdown.label}{star}</label></div>
        <div className="col-md-8">
          <select value={dropdown.value} onChange={onChange} className={classes}>
            <option value="">{placeholder}</option>
            {
              dropdown.options.map(function (option, index) {
                return <option key={index} value={option.value}>{option.name}</option>
              })
            }
          </select>
          {
            invalid ?
            <div className="required">Required Field</div> : null
          }
        </div>
      </div>
    );
  }
}

export default Dropdown;
