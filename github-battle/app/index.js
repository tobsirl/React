import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css';

function isAuthed() {
  return true;
}

function showWarning() {
  return false;
}

export default class App extends Component {
  render() {
    const authed = isAuthed();
    // const firstLogin = isNew();

    return (
      <div>
        <h1>:koala:</h1>
        {showWarning() === true && <h3>Warning</h3>}
        {showWarning() === true ? <h3>Warning</h3> : null}
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
