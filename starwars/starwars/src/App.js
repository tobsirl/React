import React, { Component } from 'react';
import { fetchCharacters } from './utils/api';
import CharactersList from './components/CharactersList';
import './App.css';

class App extends Component {
  state = {
    characters: null,
    loading: true
  };

  componentDidMount() {
    this.handleFetch();
  }

  handleFetch() {
    fetchCharacters().then(characters =>
      this.setState({
        characters: characters.results,
        loading: false
      })
    );
  }

  render() {
    console.log(this.state.characters);
    const { characters, loading } = this.state;

    if (loading) {
      return <h1>Loading</h1>;
    }

    return (
      <div>
        <CharactersList characters={characters} />
      </div>
    );
  }
}

export default App;
