import './App.css';
import './box-styles.css';

function Box({ className = '', size, style, ...otherProps }) {
  const sizeClassName = size ? `box--${size}` : '';
  return (
    <div
      className={`box ${className} ${sizeClassName}`}
      style={{ fontStyle: 'italic', ...style }}
      {...otherProps}
    />
  );
}

const smallBox = (
  <Box size="small" style={{ background: 'lightblue' }}>
    small lightblue box
  </Box>
);
const mediumBox = (
  <Box size="medium" style={{ background: 'pink' }}>
    medium pink box
  </Box>
);
const largeBox = (
  <Box size="large" style={{ background: 'orange' }}>
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
