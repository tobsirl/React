import React from 'react';

const CharacterGrid = ({ characters, isLoading }) => {
  if (isLoading) return <h1>Loading...</h1>;

  return (
    <section className="cards">{characters.map((charater) => (
      <h1>{charater.name}</h1>
    ))}</section>
  );
};

export default CharacterGrid;
