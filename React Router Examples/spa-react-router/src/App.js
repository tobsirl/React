import React from 'react';
import { Home, About, Contact } from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Poppers!</h1>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
