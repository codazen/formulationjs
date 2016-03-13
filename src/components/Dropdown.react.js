'use strict';
require('./styles/Dropdown.less');

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
        <div className="col-md-4"><label htmlFor={dropdown.name}>{dropdown.label}{star}</label></div>
        <div className="col-md-8">
          <select value={dropdown.value} onChange={onChange} className={classes}>
            <option value="">{placeholder}</option>
            {
              dropdown.options.map(function (option, index) {
                return <option key={index} value={option.value}>{option.name}</option>
              })
            }
          </select>
        </div>
        {
          invalid ?
          <div className="required">Required Field</div> : null
        }
      </div>
    );
  }
}

export default Dropdown;
