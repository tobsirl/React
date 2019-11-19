import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import Nav from './Nav';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav></Nav>
        <h1>Hi from App</h1>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
