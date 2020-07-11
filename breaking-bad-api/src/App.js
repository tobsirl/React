import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';

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

  return (
    <div className="container">
      <Header />
      <Search getQuery={(query) => setQuery(query)} />
      <CharacterGrid characters={characters} isLoading={isLoading} />
    </div>
  );
}

export default App;
