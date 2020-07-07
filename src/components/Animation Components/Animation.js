import React, { Component } from 'react';
import '../../styles/animation.sass';
import Card from './Card';

class Animation extends Component {
  render() {
    return (
      <div className="animation">
        <Card index="1"/>
        <Card index="2"/>
        <Card index="3"/>
      </div>
      )
  }
}

export default Animation;
