import React from 'react';
import { Link } from 'react-router-dom';

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
    </div>
  );
}

export default App;
