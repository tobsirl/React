import React, { useState } from 'react';

export default function SearchMovies() {
  const [searchTerm, setSearchTerm] = useState('');

  async function searchMovie(e) {
    e.preventDefault();
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=4e6a1064e598fc7775b77627eaf33da0&query=${searchTerm}`
    );

    const data = await response.json();

    return data;
  }

  return (
    <div>
      <form className="form">
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder="The Godfather"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="button" type="submit" onClick={searchMovie}>
          Search
        </button>
      </form>
    </div>
  );
}
