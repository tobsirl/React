import React, { Component } from 'react';
import { fetchMainPosts } from '../utils/api';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: null,
      error: null,
      loading: true
    };
  }

  componentDidMount() {
    this.handleFetch();
  }

  handleFetch() {
    this.setState({
      posts: null,
      error: null,
      loading: true
    });

    fetchMainPosts(this.props.type).then(posts =>
      this.setState({
        posts,
        loading: false,
        error: null
      })
    );
  }

  render() {
    console.log(this.state.posts);
    return (
      <div className="container">
        <h1>Hacker</h1>
        {JSON.stringify(this.state.posts)}
      </div>
    );
  }
}
