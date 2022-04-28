import React from 'react';
import Box from './Box';
import boxes from './boxes';
import './style.css';

export default function App() {
  const [squares, setSquares] = React.useState(boxes);

  function handleClick(id) {
    setSquares((prevSquares) => {
      const newSquares = [];
      for (let i = 0; i < prevSquares.length; i++) {
        const currentSquare = prevSquares[i];
        if (currentSquare.id === id) {
          const updatedSquare = {
            ...currentSquare,
            on: !currentSquare.on,
          };
          newSquares.push(updatedSquare);
        } else {
          newSquares.push(currentSquare);
        }
      }
      return newSquares;
    });
  }

  return (
    <main>
      <div className="boxes">
        {squares.map((box) => (
          <Box key={box.id} on={box.on} toggle={handleClick} id={box.id}></Box>
        ))}
      </div>
    </main>
  );
}
