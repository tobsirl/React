import React, { useContext } from 'react';
import { UserContext } from './userContext';

function Header() {
  const { username } = useContext(UserContext);
  
  return (
    <header className="header">
      <p>Welcome, {username}!</p>
    </header>
  );
}

export default Header;
