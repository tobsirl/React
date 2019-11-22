import React from 'react';

export default function PostsList(props) {
  console.log(props.posts)
  return (
    <div>
      <ul>{props.posts.map((post) => {
        return <li key={post.id}>{post.title}</li>
      })}</ul>
    </div>
  );
}
