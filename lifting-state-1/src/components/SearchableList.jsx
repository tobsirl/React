import React, { useState } from 'react';
import List from './List';
import Search from './Search';

export default function SearchableList({ list }) {
  const [query, setQuery] = useState('');

  const handleQuery = (event) => {
    setQuery(event.target.value);
  };

  return (
    <div>
      <Search query={query} handleQuery={handleQuery}>
        Search List:
      </Search>
      <List list={list} />
    </div>
  );
}
