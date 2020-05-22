import React from 'react';

export default function MoviesCardList(props) {
  return (
    <ul>
      {props.movies.map(({id, title}) => (
        <li key={id}>{title}</li>
      ))}
    </ul>
  );
}
