import './App.css';
import React, { useState } from 'react';

import Display from './components/Display';
import NameInput from './components/NameInput';
import AnimalInput from './components/AnimalInput';

function App() {
  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');

  function nameChange(event) {
    setName(event.target.value);
  }

  return (
    <form className="App">
      <NameInput name={name} onNameChange={nameChange} />
      <AnimalInput
        animal={animal}
        onAnimalChange={(event) => setAnimal(event.target.value)}
      />
      <Display name={name} animal={animal} />
    </form>
  );
}

export default App;
