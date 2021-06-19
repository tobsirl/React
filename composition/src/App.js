import React, { useState } from 'react';
import './App.css';

function Header() {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

function LoginScreen({ onLogin }) {
  return (
    <div>
      <h1>LoginScreen</h1>
      <button onClick={onLogin}>Login</button>
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
      <div style={{ flex: 1 }}>
        {currentUser ? (
          <Dashboard />
        ) : (
          <LoginScreen onLogin={() => setCurrentUser({ name: 'Paul' })} />
        )}
      </div>
    </div>
  );
}

export default App;
