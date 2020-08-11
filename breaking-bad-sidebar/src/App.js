import React, { useState, useEffect } from 'react';

import './styles.css';

import Header from './Header';
import Sidebar from './Sidebar';
import Characters from './Characters';

function App() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getCharacters() {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters`
    );
    const data = await response.json();
    setCharacters(data);
    setIsLoading(false)
  }

  useEffect(() => {
    getCharacters()
  
  }, [])

  if(isLoading) return <p>Loading...</p>

  return (
    <div className="container">
      <Header />
      <Sidebar characters={characters}/>
      <Characters />
    </div>
  );
}

export default App;
