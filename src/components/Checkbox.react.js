'use strict';
require('./styles/Checkbox.less');

import React from 'react';
import classNames from 'classnames';

class Checkbox extends React.Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    var { checkbox, onChange, onClick, name, initialRender } = this.props;
    var star = checkbox.required ? '*' : '';
    var required = checkbox.required ? 'Required Field' : '';
    var invalid = checkbox.value.length == 0 && !initialRender && checkbox.required;
    //it is invalid if when you loop through all the checkbox options, it returns nothing
    //the part you need to change is checkbox.value?
    var classes = classNames({
      'invalid' : invalid
    });
    return (
      <div>
        <label>{checkbox.groupLabel}{star}
          {
            checkbox.options.map(function (option, index) {
              return  (
                <div key={index}>
                    <label className="checkboxAlignment">
                      <input type="checkbox" name={name} value={option.value} onClick={onClick} />{option.name}
                    <label/>
                </div>
              );
            })
          }
        </label>
          {
            invalid ?
            <div className="required">Required Field</div> : null
          }
      </div>
    );
  }
}

export default Checkbox;
