import React from 'react';
import Title from './Title';

export default function PostsList(props) {
  // console.log(props.posts);
  return (
    <div>
      <ul>
        {props.posts.map(post => {
          return (
            <div>
              <li key={post.id}>
                {/* <a href={post.url}>{post.title}</a> */}
                <Title url={post.url} title={post.title} id={post.id} />
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
