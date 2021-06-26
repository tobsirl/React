import React from 'react';
import { ThemeContext } from '../context/ThemeContext';

function Button() {
  const value = React.useContext(ThemeContext);
  console.log(value);
  return <button className={`${value}-theme`}>Switch Theme</button>;
}

export default Button;
