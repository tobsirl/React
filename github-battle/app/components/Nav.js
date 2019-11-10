import React from 'react';
import { ThemeConsumer } from '../contexts/theme';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="row space-between">
          <ul className="row nav">
            <li>
              <Link to="/" className="nav-link">
                Popular
              </Link>
            </li>
            <li>
              <Link to="/battle" className="nav-link">
                Battle
              </Link>
            </li>
          </ul>
          <button
            style={{ fontSize: 30 }}
            className="btn-clear"
            onClick={toggleTheme}
          >
            {theme === 'light' ? '🔦' : '💡'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}
