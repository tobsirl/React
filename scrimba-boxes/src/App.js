import React from 'react';
import boxes from './boxes';
import './style.css';

export default function App() {
  /**
   * Challenge part 1:
   * 1. Initialize state with the default value of the
   *    array pulled in from boxes.js
   * 2. Map over that state array and display each one
   *    as an empty square (black border, transparent bg color)
   *    (Don't worry about using the "on" property yet)
   */
  const [boxArr, setBoxArr] = React.useState(boxes);
  return (
    <main>
      <h1>Boxes will go here</h1>
      <div className="boxes">
        {' '}
        {boxArr.map((b) => (
          <p className="box">{b.id}</p>
        ))}
      </div>
    </main>
  );
}
