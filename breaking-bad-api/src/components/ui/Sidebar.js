import React from 'react';

export default function Sidebar({ list }) {
  console.log(list);
  return (
    <div className="sidebar">
      Test
      <ul>
        {list.map(({ char_id, name }) => (
          <li key={char_id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
