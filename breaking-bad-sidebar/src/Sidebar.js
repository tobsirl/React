import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import slug from 'slug';

// function CustomLink({ to, children }) {
//   const match = useRouteMatch(to.pathname);

//   return (
//     <li style={{ fontWeight: match ? 900 : 'normal' }}>
//       <Link to={to}>{children}</Link>
//     </li>
//   );
// }

export default function Sidebar({ title, list }) {
  const { url } = useRouteMatch();

  return (
    <div className="sidebar">
      <h3>{title}</h3>
      <ul>
        {list.map((character) => (
          <Link
            key={character.char_id}
            to={`${url}/${character.char_id}`}
          >
            {character.name}
          </Link>
        ))}
      </ul>
    </div>
  );
}
