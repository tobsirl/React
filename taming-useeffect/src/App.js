import { useState } from 'react';
import './App.css';

import { useFetch } from './useFetch';

function App() {
  const [url, setUrl] = useState(null);
  const { data } = useFetch({
    url,
  });
  console.log('App rendering');
  return (
    <div className="App">
      <div>Hello</div>
      <div>
        <button onClick={() => setUrl('/jack.json')}>Jack</button>
        <button onClick={() => setUrl('/sally.json')}>Sally</button>
      </div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
