import React, { Component } from 'react';
import { withToggle } from './HOC/withToggle';

class Favorite extends Component {
  render() {
    return (
      <div>
        <h3>Click heart to favourite</h3>
        <h1>
          <span onClick={this.props.toggle}>{this.props.on ? '💗' : '💓'}</span>
        </h1>
      </div>
    );
  }
}

export default withToggle(Favorite);
