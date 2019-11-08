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
  constructor(props) {
    super(props);

    this.state = {
      theme: 'light'
    };
  }
  render() {
    return (
      <ThemeProvider value={this.state.theme}>
        <div className="container">
          <Battle />
        </div>
      </ThemeProvider>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
