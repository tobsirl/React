import './App.css';
import React, { useReducer } from 'react';

function countReducer(state, action) {
  console.log('action :>> ', action);
  return state + action;
}

function Counter({ step = 1, initialCount = 0 }) {
  const [count, changeCount] = useReducer(countReducer, initialCount);

  function increment() {
    changeCount(step);
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
