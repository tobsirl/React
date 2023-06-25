import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setstep] = useState(1);
  return (
    <div className="counter">
      <button onClick={() => setCount((c) => c - step)}>-</button>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + step)}>+</button>
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
