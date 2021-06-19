import React, { useState } from 'react';
import './App.css';

function WelcomeMessage({ user }) {
  return (
    <div>
      <h1>Welcome {user.name}</h1>
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

function DashboardContent({ user }) {
  return (
    <div>
      <h3>Dashboard Content</h3>
      <WelcomeMessage user={user} />
    </div>
  );
}

function DashboardNav() {
  return (
    <div>
      <h3>Dashboard Nav</h3>
    </div>
  );
}

function Dashboard({ onLogout, user }) {
  return (
    <div>
      <h1>The Dashboard</h1>
      <DashboardNav />
      <DashboardContent user={user} />
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

function LoginScreen({ onLogin }) {
  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

function App() {
  const [currentUser, setCurrentUser] = useState('');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
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

