import React from 'react';
import { useParams } from 'react-router-dom';

export default function Character() {
  const { characterId } = useParams();
  console.log(characterId);
  return (
    <div>
      <h3 className="center">Main Content</h3>
      {characterId}
    </div>
  );
}
