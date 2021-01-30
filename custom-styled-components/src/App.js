import './App.css';
import './box-styles.css';

function Box(props) {
  return <div {...props} />;
}

const smallBox = (
  <Box
    className="box box--small"
    style={{ background: 'lightblue', fontStyle: 'italic' }}
  >
    small lightblue box
  </Box>
);
const mediumBox = (
  <Box
    className="box box--medium"
    style={{ background: 'pink', fontStyle: 'italic' }}
  >
    medium pink box
  </Box>
);
const largeBox = (
  <Box
    className="box box--large"
    style={{ background: 'orange', fontStyle: 'italic' }}
  >
    large orange box
  </Box>
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
