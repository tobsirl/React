import React from 'react';

export default function Sidebar({ characters }) {
  console.log(characters);

  return (
    <div className="sidebar">
      <h3>Title</h3>
      <ul>
        {characters.map((charactor) => (
          <li key={charactor.char_id}>
            <a href="#">{charactor.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
