import React from 'react';
import Title from './Title';
import PostMetaInfo from './PostMetaInfo';

export default function PostsList(props) {
  console.log(props.posts);
  return (
    <div>
      <ul>
        {props.posts.map(post => {
          return (
            <div>
              <li key={post.id}>
                <Title url={post.url} title={post.title} id={post.id} />
                <PostMetaInfo by={post.by} time={post.time} />
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
