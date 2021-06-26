import React from 'react';
import ThemeProvider from '../context/ThemeContext';

function Button() {
  const value = React.useContext(ThemeProvider);
  console.log(value);
  return <button className={`${value}-theme`}>Switch Theme</button>;
}

export default Button;
