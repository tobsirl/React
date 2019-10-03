import React, { Component } from 'react';

export default class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'Loading'
    };
  }

  componentDidMount() {
    window.setInterval(() => {
      this.state.content === 'Loading' + '...'
        ? this.setState({ content: 'Loading' })
        : this.state(() =>
            this.setState(({ content }) => ({ content: content + '.' }))
          );
    }, 300);
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
