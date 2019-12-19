import React, { Component } from 'react';

class Toggler extends Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState(prevState => {
      return {
        on: !prevState.on
      };
    });
  };

  render() {
    return <div>{this.props.children(this.state.on, this.toggle)}</div>;
  }
}

export default Toggler;
