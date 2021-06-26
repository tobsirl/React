import React from 'react';
const ThemeContext = React.createContext();
export default function ThemeProvider(props) {
  return <ThemeContext.Provider value="light" {...props} />;
}

export { ThemeContext };
