import React from 'react';

export default function Header() {
  return (
    <>
      <header>
        <nav className="container flex">
          <ul>
            <li>
              <a href="">Home</a>
              <a href="">About</a>
              <a href="">Contact</a>
            </li>
          </ul>
          <input type="text" value="" />
        </nav>
      </header>
    </>
  );
}
