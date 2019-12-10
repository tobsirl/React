import React, { useState, useEffect } from 'react';

function Character() {
  const [input, setInput] = useState('');

  useEffect(() => {
    document.title = `${240 - input.length} characters`;
  }, [input]);

  return (
    <div>
      <textarea
        type="text"
        value={input}
        placeholder="Type text here!"
        onChange={e => setInput(e.target.value)}
      />
      <button disabled={input.length === 0 || input.length > 240}>
        Sumbit
      </button>
      <br />
      <h1>{input}</h1>
    </div>
  );
}

export default Character;
