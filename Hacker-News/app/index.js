import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import Nav from './components/Nav';
import Posts from './components/Posts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from './contexts/theme';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider value={}>
        <Router>
          <div className="container">
            <Nav />
            <Switch>
              <Route exact path="/" render={() => <Posts type="top" />}></Route>
              <Route path="/new" render={() => <Posts type="new" />}></Route>
            </Switch>
          </div>
        </Router>
      </ThemeProvider>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
