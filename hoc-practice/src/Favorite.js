import React, { Component } from 'react';
import { withToggle } from './HOC/withToggle';

class Favorite extends Component {
  state = {
    isFavorited: false
  };

  toggleFavorite = () => {
    this.setState(prevState => {
      return {
        isFavorited: !prevState.isFavorited
      };
    });
  };

  render() {
    return (
      <div>
        <h3>Click heart to favourite</h3>
        <h1>
          <span onClick={this.toggleFavorite}>
            {this.state.isFavorited ? '💗' : '💓'}
          </span>
        </h1>
      </div>
    );
  }
}

export default withToggle(Favorite);
