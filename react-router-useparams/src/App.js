import React from 'react';
import Header from './components/Header';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ServicesList from './pages/ServicesList';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/services">
          <ServicesList />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
