import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Character() {
  const [character, setcharacter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { characterId } = useParams();

  console.log(character);

  async function getCharacter(characterId) {
    const response = await fetch(
      `https://www.breakingbadapi.com/api/characters/${characterId}`
    );

    const data = await response.json();
    setcharacter(data[0]);
    setIsLoading(false)
  }

  useEffect(() => {
    getCharacter(characterId)
 
  }, [characterId])

  if (isLoading) return <p>Loading...</p>;


  return (
    <div>
      <h3 className="center">Main Content</h3>
      {characterId}
      <p>{JSON.stringify(character, null, 2)}</p>
      <p>{character.name}</p>
      <img src={character.img} alt="" />
    </div>
  );
}
