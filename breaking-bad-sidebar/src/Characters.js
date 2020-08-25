import React, { useState, useEffect } from 'react';

import Header from './Header';
import Sidebar from './Sidebar';
import Character from './Character';
export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getCharacters() {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters`
    );
    const data = await response.json();
    setCharacters(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <Sidebar characters={characters} />
        <Character />
        <h3 className="center">Main Content</h3>
      </div>
    </React.Fragment>
  );
}
