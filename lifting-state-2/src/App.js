import './App.css';
import React, { useState } from 'react';

import Display from './components/Display';
import NameInput from './components/NameInput';
import DogsName from './components/DogsName';

function App() {
  const [name, setName] = useState('');
  const [dogsName, setDogsName] = useState('');

  function nameChange(event) {
    setName(event.target.value);
  }

  return (
    <div className="App">
      <NameInput name={name} onNameChange={nameChange} />
      <DogsName
        dogsName={dogsName}
        onDogsNameChange={(event) => setDogsName(event.target.value)}
      />
      <Display name={name} dogsName={dogsName} />
    </div>
  );
}

export default App;
