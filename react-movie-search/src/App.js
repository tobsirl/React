import React from 'react';

import './App.css';
import SearchMovies from './components/SearchMovies';
import RandomMovie from './components/RandomMovie';

function App() {
  return (
    <div className="App container">
      <SearchMovies></SearchMovies>
      <RandomMovie></RandomMovie>
    </div>
  );
}

export default App;
