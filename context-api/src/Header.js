import React from 'react';
import { ThemeContextConsumer } from './themeContext';

function Header() {
  return (
    <ThemeContextConsumer>
      {theme => (
        <header className={`${theme}-theme`}>
          <h2>{theme === 'light' ? 'Light' : 'Dark'} Theme</h2>
        </header>
      )}
    </ThemeContextConsumer>
  );
}

export default Header;
