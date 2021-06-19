import React, { useState } from 'react';
import './App.css';

function WelcomeMessage({ user }) {
  return (
    <div>
      <h1>Welcome {user.name}!</h1>
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

function DashboardContent({ children }) {
  return (
    <div>
      <h3>Dashboard Content</h3>
      {children}
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

function Dashboard({ children }) {
  return (
    <div>
      <h1>The Dashboard</h1>
      {children}
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
          <Dashboard>
            <DashboardNav />
            <DashboardContent>
              <WelcomeMessage user={currentUser} />
            </DashboardContent>
          </Dashboard>
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
