import React from 'react';

export default function Sidebar({ title, list }) {
  console.log(list);
  return (
    <div className="sidebar">
      <h3>{title}</h3>
      <ul>
        {list.map(({ char_id, name }) => (
          <li key={char_id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
