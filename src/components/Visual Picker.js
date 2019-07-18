import React, { Component } from 'react';
import UtilityIcons from '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';

class VisualPicker extends Component {

  render() {

    return (
        <div className="visual-picker">
          <fieldset class="">
            <legend className="label">Select an option</legend>
              <div className="visual-picker-container">
                <input type="radio" id="v" value="" name="options" />
                <label for="">
                  <span className="input-item">
                    <span>
                      <span className="visual-header">Item Text</span>
                      <span className="visual-description">Some optional item description to help the user better understand what this option is about.</span>
                    </span>
                  </span>
                  <span className="">
                    <svg className="" aria-hidden="true">
                      <use xlinkHref={`${UtilityIcons}#/check`}></use>
                    </svg>
                  </span>
                </label>
              </div>
          </fieldset>
        </div>
    )
  }
}

export default VisualPicker;
