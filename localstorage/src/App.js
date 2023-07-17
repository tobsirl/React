import './App.css';

// class based component
import React, { Component } from 'react';

// Pure Component DisplayLocal
class DisplayLocal extends Component {
  render() {
    return (
      <div>
        <h2>Local Storage</h2>
        <p>Name: {this.props.name}</p>
        <p>Age: {this.props.age}</p>
      </div>
    );
  }
}

class App extends Component {
  state = {
    default: null,
  };

  componentDidMount() {
    this.setState({ default: JSON.parse(localStorage.getItem('test')) });
  }

  saveToLocal() {
    localStorage.setItem('test', JSON.stringify({ name: 'Paul', age: 30 }));
  }

  render() {
    if (this.state.default === null) {
      return <div>Loading...</div>;
    }

    return (
      <div className="App">
        <h1>Hello, React!</h1>
        <button onClick={this.saveToLocal}>Click me!</button>
        <DisplayLocal
          name={this.state.default.name}
          age={this.state.default.age}
        />
      </div>
    );
  }
}

export default App;
