import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import './App.css';

// components
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <nav>
        <ul className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
