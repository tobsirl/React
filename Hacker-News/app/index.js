import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

import Nav from './components/Nav';
import Posts from './components/Posts';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <Posts type="Top" />
        </div>
      </Router>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
