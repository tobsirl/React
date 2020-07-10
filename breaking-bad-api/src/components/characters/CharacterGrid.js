import React from 'react';

import CharacterItem from './CharacterItem';

const CharacterGrid = ({ characters, isLoading }) => {
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <section className="cards">
      {characters.map((character) => (
        <CharacterItem data={character} />
      ))}
    </section>
  );
};

export default CharacterGrid;
