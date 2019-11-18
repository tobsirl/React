import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi from App</h1>
      </div>
    );
  }
}

ReactDom.render(<App />, document.getElementById('root'));
