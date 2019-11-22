import React from 'react';

export default function PostsList(props) {
  return (
    <div>
      <h1>List of Posts</h1>
      {JSON.stringify(props.posts, null, 2) }
    </div>
  );
}
