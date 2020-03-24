import React, { useState } from 'react';

const UserContext = React.createContext();

function UserContextProvider(props) {
  const [username, setUsername] = useState('Paul Tobin');

  function onChange(username) {
    setUsername(username);
  }

  return (
    <UserContext.Provider value={{ username, onChange }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContextProvider, UserContext };
