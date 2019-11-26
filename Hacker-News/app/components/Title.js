import React from 'react';
import { Link } from 'react-router-dom';

export default function Title({ id, title, url }) {
  return url ? (
    <a className="link" href={url}>
      {title}
    </a>
  ) : (
    <Link className="link" to={`/post?id=${id}`}>
      {title}
    </Link>
  );
}
