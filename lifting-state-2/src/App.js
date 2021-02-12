import './App.css';

import Display from './components/Display';
import NameInput from './components/NameInput';

function App() {
  return (
    <div className="App">
      <NameInput />
      <Display name="Paul" dogsName="rex" />
    </div>
  );
}

export default App;
