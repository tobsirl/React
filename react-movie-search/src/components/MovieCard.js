import React from 'react';

export default function MovieCard(props) {
  function selectMovie() {
    console.log(`This movie id: ${id}`);
  }
  const {
    id,
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
  } = props.movie;
  return (
    <div className="card" key={id} onClick={selectMovie}>
      <img
        className="card__image"
        src={`http://image.tmdb.org/t/p/w200/${poster_path}`}
        alt="title"
      />
      <div className="card__content">
        <h1 className="card__title">{title}</h1>
        <p>RELEASE DATE: {release_date}</p>
        <p>RATING: {vote_average}</p>
        <p className="card__description">{overview.slice(0, 100) + '...'}</p>
      </div>
    </div>
  );
}
