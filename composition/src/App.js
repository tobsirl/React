import React, { useState } from 'react';
import './App.css';

function WelcomeMessage({ user }) {
  return (
    <div>
      <h1>{user.name}</h1>
    </div>
  );
}

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

function Dashboard({ onLogout, user }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <WelcomeMessage user={user} />
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
          <Dashboard
            user={currentUser}
            onLogout={() => setCurrentUser({ name: '' })}
          />
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

// onLogout={() => setCurrentUser({ name: '' })}
