import React, { useState, useEffect } from 'react';
import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';

import Header from './Header';
import Sidebar from './Sidebar';
import Character from './Character';
export default function Characters() {
  const { path } = useRouteMatch();
  const [characters, setCharacters] = useState([]);
  const [character, setcharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function getCharacter(charId) {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters/${charId}`
    );

    const data = await response.json();
    setcharacter(data);
  }

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
      <div className="content main container">
        <Sidebar title="Characters" list={characters} />
        <Switch>
          <Route path={`${path}/:characterId`}>
            <Character />
          </Route>
        </Switch>
      </div>
    </React.Fragment>
  );
}
