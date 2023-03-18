import React from 'react';
import { useQuery } from 'react-query';

export default function Table() {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://swapi.dev/api/people').then((res) => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;
  console.log({ data });

  return (
    <div>
      <h1 className="text-6xl font-bold underline">React Table</h1>
    </div>
  );
}
