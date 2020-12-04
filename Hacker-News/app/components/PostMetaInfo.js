import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormat } from '../utils/helper';

export default function PostMetaInfo({ by, time, id, descendants }) {
  return (
    <div>
      <span>
        by <Link to={`/user?id=${by}`}>{by}</Link>
      </span>
      <span>on {dateFormat(time)}</span>
    </div>
  );
}
