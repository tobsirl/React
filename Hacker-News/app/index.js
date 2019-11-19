import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import Nav from './components/Nav';
import Hacker from './components/Hacker';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Hacker />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
