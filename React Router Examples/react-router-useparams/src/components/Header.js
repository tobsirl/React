import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function Header() {
  const { url } = useRouteMatch();
  console.log(url);
  
  return (
    <header>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
