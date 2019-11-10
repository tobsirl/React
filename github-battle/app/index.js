import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Popular from './components/Popular';
import Battle from './components/Battle';
import { ThemeProvider } from './contexts/theme';
import Nav from './components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === 'light' ? 'dark' : 'light'
        }));
      }
    };
  }
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <Popular />
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
