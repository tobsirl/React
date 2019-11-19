import React from 'react';

const activeStyle = {
  color: 'rgb(187, 46, 31)'
};

export default function Nav() {
  return (
    <nav className="row space-between">
      <ul>
        <li>
          <a href="#">Top</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
      </ul>
    </nav>
  );
}
