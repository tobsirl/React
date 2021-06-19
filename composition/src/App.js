import React, { useState } from 'react';
import './App.css';

function Header() {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}

function App() {
  const [currentUser, setCurrentUser] = useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ backgroundColor: 'lightblue' }}>
        <Header />
      </div>
    </div>
  );
}

export default App;
