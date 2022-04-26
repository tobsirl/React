import React from 'react';
import boxes from './boxes';
import './style.css';

export default function App() {
  const [squares, setSquares] = React.useState(boxes);
  return (
    <main>
      <div className="boxes">
        {squares.map((box) => (
          <p className="box" key={box.id}></p>
        ))}
      </div>
    </main>
  );
}
