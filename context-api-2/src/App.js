import React, { useState, useContext } from 'react';

import './App.css';

import Header from './Header';
import { UserContext } from './userContext';

function App() {
  const [newUser, setNewUser] = useState('');
  const { username, onChange } = useContext(UserContext);

  return (
    <div className="container">
      <Header />
      <main>
        <p className="main">No new notifications, {username}! 🎉</p>
        <input
          type="text"
          name="newUser"
          placeholder="New username"
          value={newUser}
          onChange={e => setNewUser(e.target.value)}
        />
        <button onClick={() => onChange(newUser)}>Change Username</button>
      </main>
    </div>
  );
}

export default App;
