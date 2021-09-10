import React from 'react';
import { render } from 'react-dom';

function Pet() {
  return React.createElement('div', {}, [
    React.createElement('h2', {}, 'Luna'),
    React.createElement('h3', {}, 'Dog'),
    React.createElement('h3', {}, 'Havanese'),
  ]);
}

function App() {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet),
    React.createElement(Pet),
    React.createElement(Pet),
  ]);
}

render(React.createElement(App), document.getElementById('root'));
