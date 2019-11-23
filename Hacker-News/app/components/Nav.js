import React from 'react';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'rgb(187, 46, 31)'
};

export default function Nav() {
  return (
    <nav className="row space-between">
      <ul className="row nav">
        <li>
          <NavLink to="/" className="nav-link" activeStyle={activeStyle}>
            Top
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" className="nav-link" activeStyle={activeStyle}>
            New
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
