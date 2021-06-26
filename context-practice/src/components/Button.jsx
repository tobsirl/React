import React from 'react';
import ThemeProvider from './themeContext';

function Button() {
  const [value] = React.useContext(ThemeProvider);
  console.log(value);
  return <button className="light-theme">Switch Theme</button>;
}

export default Button;
