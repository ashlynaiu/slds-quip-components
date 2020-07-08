import React, { Component } from 'react';
import '../../styles/animation.sass';
import Card from './Card';

class Animation extends Component {
  constructor(props) {
    super(props);
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
    this.state = {
      cardCollapsed: false
    }
  }

  toggleCollapsed(index) {
    if(index === "parent") {
      return this.setState({ cardCollapsed: !this.state.cardCollapsed});
    }
  }

  render() {
    let applyCollapsedStyles = this.state.cardCollapsed ? 'collapsed' : '';

    return (
      <div className={`animation ${applyCollapsedStyles}`}>
        <Card index="1" toggleCollapsed={this.toggleCollapsed} cardType="parent"/>
        <Card index="2" toggleCollapsed={this.toggleCollapsed} cardType="child"/>
        <Card index="3" toggleCollapsed={this.toggleCollapsed} cardType="child"/>
      </div>
      )
  }
}

export default Animation;
