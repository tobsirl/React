import './App.css';
import React, { useState } from 'react';

function Counter({ step = 1, initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Simple Counter</h1>
      <button className="btn" onClick={increment}>
        {count}
      </button>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

export default App;
