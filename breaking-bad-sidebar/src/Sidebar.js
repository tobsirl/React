import React from 'react';

export default function Sidebar({ characters }) {
  console.log(characters);

  return (
    <div className="sidebar">
      <h3>Title</h3>
      <ul>
        {characters.map((charactor) => (
          <li key={charactor.char_id}>{charactor.name}</li>
        ))}
      </ul>
    </div>
  );
}
