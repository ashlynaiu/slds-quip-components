import React, { Component } from 'react';

class Animation extends Component {
  constructor(props) {
    super(props);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.state = { 
      isOpen: false,
    }
  }

  toggleOpen() {
    this.setState({ isOpen : !this.state.isOpen })
  }

  render() {
    let isOpen = this.state.isOpen ? 'expanded' : '';
    let bodyContent = () => {
      return (
        <div className="slds-card__body slds-card__body_inner">
          <p><span>Relationship: </span>Strong and a bunch of extra text to see what happens</p>
          <p><span>Influence: </span>Neutral</p>
        </div>
      )
    }
    return (
      <div className="animation">
        <article className={`slds-card ${isOpen}`}>
          <div className="slds-card__header">
            <header className="slds-media slds-media_center slds-has-flexi-truncate slds-m-bottom_x-small" onClick={this.toggleOpen}>
              <div className="slds-media__figure">
                <span>i</span>
              </div>
              <div className="slds-media__body">
                <h2 className="slds-card__header-title">
                    <span>Astro Trailblazer</span>
                </h2>
              </div>
            </header>
            <h3>Chief Executive Officer</h3>
          </div>
            {isOpen ? bodyContent() : ''}
        </article>
      </div>
      )
  }
}

export default Animation;
