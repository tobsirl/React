import React, { useState } from 'react';
import './App.css';

function Header() {
  return (
    <div>
      <h1>Header</h1>
    </div>
  );
}

function Footer() {
  return (
    <div>
      <h1>Footer</h1>
    </div>
  );
}

function Dashboard({ onLogout }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
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
          <Dashboard onLogout={() => setCurrentUser({ name: '' })} />
        ) : (
          <LoginScreen onLogin={() => setCurrentUser({ name: 'Paul' })} />
        )}
      </div>
      <div style={{ backgroundColor: 'lightblue' }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
