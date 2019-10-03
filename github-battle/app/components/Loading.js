import React, { Component } from 'react';

const styles = {
  content: {
    fontSize: '35px',
    position: 'absolute',
    left: '0',
    right: '0',
    marginTop: '20px',
    textAlign: 'center'
  }
};

export default class Loading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: 'Loading'
    };
  }

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.state.content === 'Loading' + '...'
        ? this.setState({ content: 'Loading' })
        : this.state(() =>
            this.setState(({ content }) => ({ content: content + '.' }))
          );
    }, 300);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  render() {
    return <p style={styles.content}>{this.state.content}</p>;
  }
}
