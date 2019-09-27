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

    battle([playerOne, playerTwo])
      .then(players => {
        this.setState({
          winner: players[0],
          loser: players[1],
          error: null,
          loading: false
        });
      })
      .catch(({ message }) => {
        this.setState({
          error: message,
          loading: false
        });
      });
  }

  render() {
    const { winner, loser, error, loading } = this.state;

    if (loading === true) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p className="center-text error">{error}</p>;
    }

    return (
      <div className="grid space-around container-sm">
        <div className="card bg-light">
          <h4 className="header-lg center-text">
            {winner.score === loser.score ? 'Tie' : 'Winner'}
          </h4>
          <img
            className="avatar"
            src={winner.profile.avatar_url}
            alt={`Avatar for ${winner.profile.login}`}
          />
          <h2 className="center-text">
            <a className="link" href={winner.profile.html_url}>
              {winner.profile.login}
            </a>
          </h2>
        </div>
        <div className="card bg-light">
          <h4 className="header-lg center-text">
            {winner.score === loser.score ? 'Tie' : 'Loser'}
          </h4>
        </div>
      </div>
    );
  }
}
