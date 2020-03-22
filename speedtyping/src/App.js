import React, { useState, useEffect } from 'react';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [countDown, setCountDown] = useState(15);

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
    const id = setTimeout(() => {
      if (countDown === 0) return;
      setCountDown(countDown - 1);
    }, 1000);
    return () => {
      clearTimeout(id);
    };
  }, [countDown]);

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea value={text} onChange={handleChange} />
      <h4>Time Remaining: {countDown}</h4>
      <button onClick={() => calculateWordCount(text)}>Start</button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
