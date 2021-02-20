import './App.css';

function Board() {
  return (
    <h1>board</h1>
  )
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
    </div>
  )
}

function App() {
  return <div className="App"><Game /></div>;
}

export default App;
