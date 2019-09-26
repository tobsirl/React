import React, { Component } from 'react';
import { battle } from '../utils/api';

export default class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      winner: null,
      loser: null,
      error: null,
      loading: true
    };
  }

  componentDidMount() {
    const { playerOne, playerTwo } = this.props;

    battle([playerOne, playerTwo]).then(players => {
      console.log('data: ', players);
    });
  }

  render() {
    return (
      <div>
        <h1>Results</h1>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}
