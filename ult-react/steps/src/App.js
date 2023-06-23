import React from 'react';

export default function App() {
  return (
    <div className="steps">
      <div className="numbers">
        <div className="active">1</div>
        <div className="number">2</div>
        <div className="number">3</div>
      </div>

      <p className="message">Hello</p>

      <div className="buttons">
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }}>
          Previous
        </button>
        <button style={{ backgroundColor: '#7950f2', color: '#fff' }}>
          Next
        </button>
      </div>
    </div>
  );
}
