import React from 'react';

export default function MoviesCardList(props) {
  return (
    <div className="card__list__item">
      {props.movies
        .filter(({ poster_path }) => poster_path)
        .map(
          ({
            id,
            title,
            poster_path,
            release_date,
            vote_average,
            overview,
          }) => (
            <div className="card" key={id}>
              <img
                className="card__image"
                src={`http://image.tmdb.org/t/p/w185/${poster_path}`}
                alt="title"
              />
              <div class="card__content">
                <h1 className="card__title">{title}</h1>
                <p>
                  <small>RELEASE DATE: {release_date}</small>
                </p>
                <p>
                  <small>RATING: {vote_average}</small>
                </p>
                <p class="card__description">{overview.slice(0, 50) + '...'}</p>
              </div>
            </div>
          )
        )}
    </div>
  );
}
