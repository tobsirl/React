import React from 'react';

import CharacterItem from './CharacterItem';

const CharacterGrid = ({ characters, isLoading }) => {
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <section className="main cards">
      {characters.map((character) => (
        <CharacterItem key={character.char_id} character={character} />
      ))}
    </section>
  );
};

export default CharacterGrid;
