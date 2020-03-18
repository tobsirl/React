import React from 'react';
import ThemeContext from './themeContext';

function Button() {
  return (
    <ThemeContext.Consumer>
      {theme => <button className={`${theme}-theme`}>Switch Theme</button>}
    </ThemeContext.Consumer>
  );
}

export default Button;
