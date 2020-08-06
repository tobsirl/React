import React, { useState } from 'react';

const Search = ({ getQuery }) => {
  const [search, setSearch] = useState('');

  const onChange = (query) => {
    setSearch(query);
    getQuery(query);
  };

  return (
    <section className="main search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          autoFocus
          value={search}
          onChange={(e) => onChange(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
