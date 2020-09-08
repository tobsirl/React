import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <div className="container center">
        <h1>Breaking Bad API</h1>
        <Link to={`/characters`}>Characters</Link>
      </div>
    </React.Fragment>
  );
}
