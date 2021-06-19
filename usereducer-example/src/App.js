import './App.css';
import React, { useReducer } from 'react';

function countReducer(state, action) {
  console.log('state :>> ', state.count);
  console.log('action :>> ', action.step);
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.step
      }
      
    default:
      throw new Error('Not supported');
  }
}

function Counter({ step = 3, initialCount = 0 }) {
  const [state, dispatch] = useReducer(countReducer, { count: initialCount });

  function increment() {
    dispatch({ type: 'INCREMENT', step: step });
  }

  const { count } = state;

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
