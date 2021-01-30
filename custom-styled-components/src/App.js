import './App.css';
import './box-styles.css';

const smallBox = (
  <div
    className="box box--small"
    style={{ background: 'lightblue', fontStyle: 'italic' }}
  >
    small lightblue box
  </div>
);
const mediumBox = (
  <div
    className="box box--medium"
    style={{ background: 'pink', fontStyle: 'italic' }}
  >
    medium pink box
  </div>
);
const largeBox = (
  <div
    className="box box--large"
    style={{ background: 'orange', fontStyle: 'italic' }}
  >
    large orange box
  </div>
);

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
