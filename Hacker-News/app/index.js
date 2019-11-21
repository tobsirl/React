import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import Nav from './components/Nav';
import Posts from './components/Posts';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Posts />
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
