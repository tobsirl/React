import React, { useState } from 'react';

import MoviesCardList from './MoviesCardList';

export default function SearchMovies() {
  const [query, setQuery] = useState('');
  const [movieData, setMovieData] = useState([]);

  async function searchMovie(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=4e6a1064e598fc7775b77627eaf33da0&query=${query}`
      );

      const data = await response.json();

      setMovieData(data.results);
    } catch (err) {
      console.log(err.message);
    }
  }

  // const movie  = movieData.map((movie) => console.log(movie))
  return (
    <>
      <form className="form">
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="The Godfather"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit" onClick={searchMovie}>
          Search
        </button>
      </form>
      <div className="card-list">
        <MoviesCardList movies={movieData} />
      </div>
    </>
  );
}
