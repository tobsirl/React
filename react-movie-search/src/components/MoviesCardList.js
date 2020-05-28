import React from 'react';
import MovieCard from './MovieCard';

export default function MoviesCardList({ movies }) {
  return (
    <div className="card__list__item">
      {movies
        .filter(({ poster_path }) => poster_path)
        .map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  );
}
