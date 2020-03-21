import React, { useState } from 'react';

import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleInputChange = e => {
    setInput({
      ...input,
      [e.currentTarget.name]: e.currentTarget.value
    });
  };

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea name="input" onChange={handleInputChange} />
      <h4>Time Remaining:</h4>
      <button>Start</button>
      <h1>Word Count:</h1>
    </div>
  );
}

export default App;
