import React, { Component } from 'react';
import { fetchCharacters } from './utils/api';
import './App.css';

class App extends Component {
  state = {
    characters: null
  };

  componentDidMount() {
    this.handleFetch();
  }

  handleFetch() {
    fetchCharacters().then(characters =>
      this.setState({
        characters: characters.results
      })
    );
  }

  render() {
    console.log(this.state.characters);
    return (
      <div>
        <h1>App</h1>
      </div>
    );
  }
}

export default App;
