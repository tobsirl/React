import React, { useState } from 'react';

export default function Header() {
  const [searchText, setSearchText] = useState('');

  const onSearch = () => {

    console.log('here');
  };

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
          <input
            type="searchText"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </nav>
      </header>
    </>
  );
}
