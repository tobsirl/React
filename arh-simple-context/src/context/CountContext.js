import React from 'react';
const CountContext = React.createContext();
export function CountProvider(props) {
  const [count, setCount] = React.useState(0);
  const value = [count, setCount];
  return <CountContext.Provider value={value} {...props} />;
}

export function useCount() {
  const context = React.useContext(CountContext);
  if (!context) {
    throw new Error(`useCount must be used within the CountProvider`);
  }
  return context;
}
