import React, { useState, useEffect } from 'react';

import './App.css';

/*
  Instructions:
    Finish implementing the `useWait` custom Hook.
    `useWait` should return a boolean that changes from
    `false` to `true` after `delay` seconds. 
*/

function useWait(delay) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const id = window.setTimeout(() => {
      setShow(true);
    }, delay);

    return () => window.clearTimeout(id);
  }, [delay]);

  return show;
}

function Wait({ delay = 1000, placeholder, ui }) {
  const show = useWait(delay);

  return show === true ? ui : placeholder;
}

function App() {
  return (
    <div className="App">
      <Wait
        delay={6000}
        placeholder={<p>Waiting...</p>}
        ui={<p>This text should appear after 6 seconds.</p>}
      />
    </div>
  );
}

export default App;
