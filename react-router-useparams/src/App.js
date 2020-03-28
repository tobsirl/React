import React from 'react';
import Header from './components/Header';

import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ServicesList from './pages/ServicesList';
import ServiceDetails from './pages/ServiceDetails';

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
        <Route path={`/services/:serviceId`}>
          <ServiceDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
