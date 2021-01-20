import React, { Component } from 'react';
import Circle from './Circle';

class CirclesList extends Component {
  state = {
    circles: [],
  };

  randomColor() {
    return (
      'rgb(' +
      Math.floor(Math.random() * 255) +
      ',' +
      Math.floor(Math.random() * 255) +
      ',' +
      Math.floor(Math.random() * 255) +
      ')'
    );
  }

  randomNumber() {
    return Math.floor(Math.random() * 100);
  }

  handleAddCircle = () => {
    this.setState((prevState) => {
      return {
        circles: [
          ...prevState.circles,
          {
            number: this.randomNumber(),
            color: this.randomColor(),
          },
        ],
      };
    });
  };

  handleRemoveCircle = (circleIndex) => {
    this.setState((prevState) => {
      return {
        circles: prevState.circles.filter(
          (circle, index) => index !== circleIndex
        ),
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleAddCircle}>New Circle</button>
        <ul>
          {this.state.circles.map((circle, index) => {
            return (
              <li key={index}>
                <Circle
                  onClick={this.handleRemoveCircle}
                  color={circle.color}
                  number={circle.number}
                  id={index}
                />
              </li>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}

export default CirclesList;
