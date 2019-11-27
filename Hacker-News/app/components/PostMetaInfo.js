import React from 'react';
import { Link } from 'react-router-dom';
import { dateFormat } from '../utils/helper';

export default function PostMetaInfo({ by, time, id, descendants }) {
  return (
    <div>
      <p>
        by {by} on {dateFormat(time)}
      </p>
    </div>
  );
}
