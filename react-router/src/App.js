import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';

import './App.css';

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
        <Route path="/" exact render={() => <h1>Home page!</h1>} />
        <Route path="/about" render={() => <h1>About page!</h1>} />
      </Switch>
    </div>
  );
}

export default App;
