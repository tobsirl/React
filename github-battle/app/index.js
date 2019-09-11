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
    // const firstLogin = isNew();

    return (
      <div>
        <h1>:koala:</h1>
        {authed === true ? (
          <h1>Welcome back!</h1>
        ) : (
          <h1>Login to see your dashboard</h1>
        )}
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
