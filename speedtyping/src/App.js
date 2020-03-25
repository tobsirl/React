import React from 'react';
import useWordGame from './hooks/useWordGame';

import './App.css';

function App() {
  const {
    text,
    inputRef,
    wordCount,
    timeRemaining,
    isTimeRunning,
    handleChange,
    startGame
  } = useWordGame();

  return (
    <div>
      <h1>How fast can you type?</h1>
      <textarea
        disabled={!isTimeRunning}
        value={text}
        onChange={handleChange}
        ref={inputRef}
      />
      <h4>Time Remaining: {timeRemaining}</h4>
      <button disabled={isTimeRunning} onClick={() => startGame()}>
        Start
      </button>
      <h1>Word Count: {wordCount}</h1>
    </div>
  );
}

export default App;
