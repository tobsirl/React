import React, { Component } from 'react';
import { fetchMainPosts } from '../utils/api';
import Loading from './Loading';
import PropTypes from 'prop-types';
import PostsList from './PostsList';

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

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type) {
      this.handleFetch();
    }
  }

  handleFetch() {
    this.setState({
      posts: null,
      error: null,
      loading: true
    });

    fetchMainPosts(this.props.type)
      .then(posts =>
        this.setState({
          posts,
          loading: false,
          error: null
        })
      )
      .catch(err =>
        this.setState({
          error: err.message,
          loading: false
        })
      );
  }

  render() {
    const { posts, error, loading } = this.state;

    if (loading === true) {
      return <Loading />;
    }

    if (error) {
      return <p className="center-text error">{error}</p>;
    }
    return (
      <div className="container">
        <PostsList posts={posts} />
      </div>
    );
  }
}

Posts.propTypes = {
  type: PropTypes.oneOf(['top', 'new'])
};
