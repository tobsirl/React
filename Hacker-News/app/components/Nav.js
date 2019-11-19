import React from 'react';

const activeStyle = {
  color: 'rgb(187, 46, 31)'
};

export default function Nav() {
  return (
    <nav className="row space-between">
      <ul className="row nav">
        <li>
          <a href="#" className="nav-link" activeStyle={activeStyle}>
            Top
          </a>
        </li>
        <li>
          <a href="#" className="nav-link" activeStyle={activeStyle}>
            New
          </a>
        </li>
      </ul>
    </nav>
  );
}
