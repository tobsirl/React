import React, { useState } from 'react';

const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search characters"
          autoFocus
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
