import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';
import Sidebar from './components/ui/Sidebar';
import CharaterItem from './components/characters/CharacterItem';

function App() {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const response = await fetch(
        `https://www.breakingbadapi.com/api/characters?=name${query}`
      );
      const result = await response.json();
      setCharacters(result);
    };
    fetchCharacters();
    setIsLoading(false);
  }, [query]);

  // console.log(characters);

  return (
    <Router>
      <div className="container">
        <Header />
        <Sidebar list={characters} title="Charactor Names" />
      </div>
    </Router>
  );
}

export default App;
