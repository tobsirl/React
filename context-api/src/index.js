import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import ThemeContext from './themeContext';

ReactDOM.render(
  <ThemeContext>
    <App />
  </ThemeContext>,
  document.getElementById('root')
);
