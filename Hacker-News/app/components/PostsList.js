import React from 'react';

export default function PostsList(props) {
  // console.log(props.posts);
  return (
    <div>
      <ul>
        {props.posts.map(post => {
          return (
            <div>
              <li key={post.id}>
                <a href={post.url}>{post.title}</a>
                <p>
                  by {post.by} on {Date(post.time)}
                </p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
