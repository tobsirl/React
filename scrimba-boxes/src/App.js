import React from 'react';
import boxes from './boxes';
import './style.css';

export default function App(props) {
  const [squares, setSquares] = React.useState(boxes);

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
