import React, { Component } from 'react';
import { fetchMainPosts } from '../utils/api';

export default class Posts extends Component {
  state = {
    posts: null,
    error: null,
    loading: true
  };

  componentDidMount() {
    this.handleFetch();
  }

  render() {
    return (
      <div className="container">
        <h1>Hacker</h1>
      </div>
    );
  }
}
