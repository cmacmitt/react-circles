import React, { Component } from 'react';

class Circle extends Component {
  render() {
    return (
      <div
        onClick={() => this.props.onClick(this.props.id)}
        className="circle"
        style={{ backgroundColor: this.props.color, cursor: 'pointer' }}
      >
        {this.props.number}
      </div>
    );
  }
}

export default Circle;
