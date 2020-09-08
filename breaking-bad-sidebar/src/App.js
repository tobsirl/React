import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles.css';

import Home from './Home';
import Characters from './Characters';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
