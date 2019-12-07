import React from 'react';

export default function CharactersList({ characters }) {
  console.log(characters);
  return (
    <div>
      <ul>
        {characters.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
