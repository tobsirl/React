import Joke from './components/Joke';
import './App.css';

function App() {
  return (
    <div className="App">
      <Joke question="Why did the chicken cross the road?" punchline="To get to the other side" />
      <Joke question="" punchLine="Yo Mamma" />
      <Joke question="" punchLine="" />
      <Joke question="" punchLine="" />
      <Joke question="" punchLine="" />
    </div>
  );
}

export default App;
