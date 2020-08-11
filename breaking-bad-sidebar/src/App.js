import React from 'react';

import './styles.css';

import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="container">
      <Header />
      <h1 className="main">Test</h1>
      <Sidebar />
    </div>
  );
}

export default App;
