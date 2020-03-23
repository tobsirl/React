import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(15);
  const [timer, setTimer] = useState(false);

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    console.log(text);
    const wordsArr = text.trim().split(' ');
    const count = wordsArr.filter(word => word !== '').length;
    setWordCount(count);
  }

  useEffect(() => {
    let id;
    if (timer && timeRemaining > 0) {
      id = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else if (timer === 0) {
      setTimer(false);
    }

    return () => clearTimeout(id);
  }, [timeRemaining, timer]);

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button onClick={() => setTimer(true)}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
