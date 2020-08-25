import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './styles.css';

import Characters from './Characters';

function App() {
  return (
    <Router>
      <React.Fragment>
        <Characters />
      </React.Fragment>
    </Router>
  );
}

export default App;
