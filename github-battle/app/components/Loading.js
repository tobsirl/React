import React, { Component } from 'react';

export default class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'Loading'
    };
  }

  render() {
    return (
      <div>
        <h1>Loading...</h1>
        {this.state.content}
      </div>
    );
  }
}
