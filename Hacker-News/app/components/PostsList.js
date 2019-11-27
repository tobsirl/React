import React from 'react';
import Title from './Title';
import PostMetaInfo from './PostMetaInfo';

export default function PostsList({ posts }) {
  return (
    <div>
      <ul>
        {posts.map(post => {
          return (
            <li key={post.id} className="post">
              <Title url={post.url} title={post.title} id={post.id} />
              <PostMetaInfo
                by={post.by}
                time={post.time}
                id={post.id}
                descendants={post.descendants}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
