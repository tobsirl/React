import React from 'react';
import Box from './Box';
import boxes from './boxes';
import './style.css';

export default function App() {
  const [squares, setSquares] = React.useState(boxes);
  console.log(squares);

  function handleClick() {
    setSquares((prevState) => ({
      ...prevState,
      prevState: !prevState.on,
    }));
    console.log('Clicked', !squares[0].on);
  }

  /**
   * Challenge: Create a toggle() function that logs
   * "clicked!" to the console
   *
   * Pass that function down to each of the Box components
   * and set it up so when they get clicked it runs the function
   */

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
