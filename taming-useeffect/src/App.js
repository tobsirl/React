import './App.css';

import { useFetch } from './useFetch';

function App() {
  const { data } = useFetch({
    url: '/jack.json',
  });
  console.log('App rendering');
  return (
    <div className="App">
      <div>Hello</div>
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
