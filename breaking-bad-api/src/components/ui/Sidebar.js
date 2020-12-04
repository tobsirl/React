import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function Sidebar({ title, list }) {
  const { url } = useRouteMatch();
  
  console.log(list);
  return (
    <div className="sidebar">
      <h3>{title}</h3>
      <ul>
        {list.map(({ char_id, name }) => (
          <Link to={`${url}/`} className="char__list" key={char_id}>
            {name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
