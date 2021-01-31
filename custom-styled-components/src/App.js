import './App.css';
import './box-styles.css';

function Box({ className = '', style, ...otherProps }) {
  return (
    <div
      className={`box ${className}`}
      style={{ fontStyle: 'italic', ...style }}
      {...otherProps}
    />
  );
}

const smallBox = (
  <Box className="box--small" style={{ background: 'lightblue' }}>
    small lightblue box
  </Box>
);
const mediumBox = (
  <Box className="box--medium" style={{ background: 'pink' }}>
    medium pink box
  </Box>
);
const largeBox = (
  <Box className="box--large" style={{ background: 'orange' }}>
    large orange box
  </Box>
);

function App() {
  return (
    <div className="container">
      {smallBox}
      {mediumBox}
      {largeBox}
      <Box>sizeless box</Box>
    </div>
  );
}

export default App;
