import React from 'react';
import Box from './Box';
import boxes from './boxes';
import './style.css';

export default function App(props) {
  const [squares, setSquares] = React.useState(boxes);

  /**
   * Challenge part 2:
   * 1. Create a separate component called "Box" and
   *    replace the `div` above with our <Box /> components
   * 2. Pass the Box component a prop called `on` with the
   *    value of the same name from the `boxes` objects
   * 3. In the Box component, apply dynamic styles to determine
   *    the backgroundColor of the box. If it's `on`, set the
   *    backgroundColor to "#222222". If off, set it to "none"
   */

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
