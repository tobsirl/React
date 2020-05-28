import React from 'react';
import MovieCard from './MovieCard';

export default function MoviesCardList(props) {
  return (
    <div className="card__list__item">
      {props.movies
        .filter(({ poster_path }) => poster_path)
        .map((movie) => (
          <MovieCard movie={movie} />
        ))}
    </div>
  );
}
