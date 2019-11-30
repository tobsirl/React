import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import Nav from './components/Nav';
import Posts from './components/Posts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from './contexts/theme';

class App extends React.Component {
  state = {
    theme: 'light',
    toggleTheme: () => {
      this.setState(({ theme }) => ({
        theme: theme === 'light' ? 'dark' : 'light'
      }));
    }
  };

  render() {
    console.log(this.state.theme);
    return (
      <ThemeProvider value={this.state}>
        <Router>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => <Posts type="top" />}
                ></Route>
                <Route path="/new" render={() => <Posts type="new" />}></Route>
              </Switch>
            </div>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
