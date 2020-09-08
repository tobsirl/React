import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles.css';

import Home from './Home';
import Characters from './Characters';
import FourOhFour from './FourOhFour';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/characters">
            <Characters />
          </Route>
          <Route path="*">
            <FourOhFour />
          </Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
