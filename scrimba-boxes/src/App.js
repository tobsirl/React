import React from 'react';
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

  const styles = {
    backgroundColor: props.darkMode ? '#222222' : '#cccccc',
  };

  return (
    <main>
      <div className="boxes">
        {squares.map((box) => (
          <div style={styles} className="box" key={box.id}></div>
        ))}
      </div>
    </main>
  );
}
