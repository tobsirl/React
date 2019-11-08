import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Popular from './components/Popular';
import Battle from './components/Battle';
import { ThemeProvider } from './contexts/theme';

function isAuthed() {
  return true;
}

function showWarning() {
  return false;
}

export default class App extends Component {
  render() {
    return (
      <ThemeProvider>
        <div className="container">
          <Battle />
        </div>
      </ThemeProvider>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
