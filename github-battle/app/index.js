import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css';

class App extends Component {
  render() {
    return <div>Hello Paul!</div>;
  }
}

ReactDom.render(<App />, document.getElementById('app'));

