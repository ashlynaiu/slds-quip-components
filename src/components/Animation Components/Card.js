import React, { Component } from 'react';
import Icon from '../Icon';
import Comment from '../../icons/comment.svg';

class Card extends Component {
  constructor(props) {
    super(props);
    this.toggleOpen = this.toggleOpen.bind(this);
    this.cardHandler = this.cardHandler.bind(this);
    this.state = {
      isOpen: false,
    }
  }

  toggleOpen() {
    this.setState({ isOpen : !this.state.isOpen });
  }

  cardHandler() {
    this.props.toggleCollapsed(this.props.cardType);
  }

  render() {
    let cardType = this.props.cardType
    let isOpen = this.state.isOpen ? 'expanded' : '';

    let bodyContent = () => {
      return (
        <div className="content">
          <p><span>Relationship: </span>Strong and a bunch of extra text to see what happens</p>
          <p><span>Influence: </span>Neutral</p>
        </div>
      )
    }

    let buttonGroup = () => {
      return (
        <div className="button-group">
          <button className="button-item" onClick={this.cardHandler}>
            <Icon object="contract_alt" type="utility" size="x-small" />
          </button>
          <button className="button-item">
            <Icon object="edit" type="utility" size="x-small" />
          </button>
        </div>
      )
    }

    return (
      <article className={`slds-card ${isOpen} ${cardType}`}>
        {buttonGroup()}
        <div className="slds-card__header">
          <header className="slds-media slds-media_center slds-has-flexi-truncate slds-m-bottom_xx-small">
            <div className="slds-media__figure">
              <div className="dot"></div>
            </div>
            <div className="slds-media__body">
              <h2 className="slds-card__header-title">
                  <span>Astro Trailblazer</span>
              </h2>
            </div>
          </header>
          <h3>Chief Executive Officer</h3>
        </div>
        <div className="slds-card__body slds-card__body_inner">
          {isOpen ? bodyContent() : ''}
          <div className="card-footer">
            <button onClick={this.toggleOpen} className="show-more">{isOpen ? 'Show Less' : 'Show More'}</button>
            <img className="comment" src={Comment} alt="" />
          </div>
        </div>
      </article>
      )
  }
}

export default Card;
