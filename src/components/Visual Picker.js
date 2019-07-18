import React, { Component } from 'react';
import UtilityIcons from '@salesforce-ux/design-system/assets/icons/utility-sprite/svg/symbols.svg';

class VisualPicker extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { isChecked: false }
  }

  handleChange() {
    this.setState({isChecked: !this.state.isChecked });
  }
  render() {
    console.log(this.state.isChecked);
    return (
        <div className="visual-picker">
          <fieldset class="">
            <legend className="label">Select an option</legend>
              <div className="form-control">
                <div className="visual-picker-container">
                  <input type="radio" id="visual-picker-1" value="visual-picker-1" name="options" onChange={this.handleChange}/>
                  <label htmlFor="visual-picker-1">
                    <span className="input-item">
                      <span>
                        <span className="visual-header">Item Text</span>
                        <span className="visual-description">Some optional item description to help the user better understand what this option is about.</span>
                      </span>
                    </span>
                    <span className="visual-check">
                      <svg className="" aria-hidden="true">
                        <use xlinkHref={`${UtilityIcons}#/check`}></use>
                      </svg>
                    </span>
                  </label>
                </div>
              </div>
          </fieldset>
        </div>
    )
  }
}

export default VisualPicker;
