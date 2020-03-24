import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';

function Header() {
  const { theme } = useContext(ThemeContext);

  return (
    <header className={`${theme}-theme`}>
      <h2>{theme === 'light' ? 'Light' : 'Dark'} Theme</h2>
    </header>
  );
}

export default Header;
