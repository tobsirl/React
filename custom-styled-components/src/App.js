import './App.css';
import './box-styles.css';

const smallBox = <div>small lightblue box</div>;
const mediumBox = <div>medium pink box</div>;
const largeBox = <div>large orange box</div>;

function App() {
  return (
    <div className="container">
      {smallBox}
      {mediumBox}
      {largeBox}
    </div>
  );
}

export default App;
