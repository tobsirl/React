import React from 'react';
import { Link } from 'react-router-dom';

export default function PostMetaInfo({ by, time, id, descendants }) {
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
