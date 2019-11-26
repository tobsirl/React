import React from 'react';

export default function PostMetaInfo({ by, time }) {
  return (
    <div>
      <li>
        <p>
          by {by} on {Date(time)}
        </p>
      </li>
    </div>
  );
}
