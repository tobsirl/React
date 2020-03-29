import React from 'react';
import Header from './components/Header';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import Home from './pages/Home';
import ServicesList from './pages/ServicesList';
import ServiceDetails from './pages/ServiceDetails';

import './App.css';

function App() {
  const { path } = useRouteMatch();
  console.log(path);

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
