import React from 'react';

export default function SearchMovies() {
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
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
