import { useState, useEffect, useRef } from 'react';

function useWordGame(startingTime = 10) {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(startingTime);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const inputRef = useRef(null);

  function startGame() {
    setIsTimeRunning(true);
    setTimeRemaining(startingTime);
    setText('');
    inputRef.current.disabled = false;
    inputRef.current.focus();
  }

  function endGame() {
    setIsTimeRunning(false);
    setWordCount(calculateWordCount(text));
  }

  function handleChange(e) {
    const { value } = e.target;
    setText(value);
  }

  function calculateWordCount(text) {
    const wordsArr = text.trim().split(' ');
    const count = wordsArr.filter(word => word !== '').length;
    return count;
  }

  useEffect(() => {
    if (isTimeRunning && timeRemaining > 0) {
      setTimeout(() => {
        setTimeRemaining(time => time - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      endGame();
    }
  }, [timeRemaining, isTimeRunning]);

  return {isTimeRunning, text, wordCount ,timeRemaining, inputRef, startGame, handleChange}
}

export default useWordGame;
