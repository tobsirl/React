import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css';

function isAuthed() {
  return true;
}

function isNew() {
  return false;
}

export default class App extends Component {
  render() {
    const authed = isAuthed();
    const firstLogin = isNew();

    if (firstLogin === true) {
      return <h1>Welcome!</h1>;
    } else if (authed === true) {
      return <h1>Welcome back!</h1>;
    } else {
      return <h1>Login to see your dashboard</h1>;
    }
  }
}

ReactDom.render(<App />, document.getElementById('app'));
