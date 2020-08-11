import React from 'react';
import logo from '../src/img/logo.png';

export default function Header() {
  return (
    <div className="container">
      <header className="header center">
        <img src={logo} alt="Breaking Bad Logo" />
      </header>
    </div>
  );
}
