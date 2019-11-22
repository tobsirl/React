import React from 'react';

export default function PostsList(props) {
  console.log(props.posts);
  return (
    <div>
      <ul>
        {props.posts.map(post => {
          return (
            <div>
              <li key={post.id}>{post.title}</li>
              <p>
                by {post.by} on {Date(post.time)}
              </p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
