import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

/*
  Instructions:
    You're building an app to see how many times you can click
    a button in 10 seconds. 

    The UI has three parts, a button, a timer counting down from 10,
    and a count of how many times you've clicked the button.

    Once the timer reaches 0, remove the button from the UI.
*/

function CounterGame() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(10);
  const id = useRef(null);

  const clear = () => window.clearInterval(id.current);

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer(timer => timer - 1);
    }, 1000);
    
    return clear;
  }, []);

  useEffect(() => {
    if (timer === 0) {
      // clear interval
      clear();
    }
  }, [timer]);

  const clicked = () => {
    setCount(count => count + 1);
  };

  return (
    <div className="App">
      <h1>{count}</h1>
      <h2>Time left: {timer} seconds </h2>
      {timer <= 0 ? null : (
        <button className="btn" onClick={clicked}>
          +
        </button>
      )}
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<CounterGame />, rootElement);
