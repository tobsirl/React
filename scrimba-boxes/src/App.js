import React from 'react';
import Box from './Box';
import boxes from './boxes';
import './style.css';

export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  return (
    <main>
      <div className="boxes">
        {squares.map((box) => (
          <Box key={box.id} on={box.on}></Box>
        ))}
      </div>
    </main>
  );
}
