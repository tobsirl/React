import React from 'react';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';

import Photos from './pages/Photo';
import Cart from './pages/Cart';

import './App.css';

function App() {
  return (
    <div>
      <Header />

      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
