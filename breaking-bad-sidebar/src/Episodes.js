import React, { useState, useEffect } from 'react';

export default function Episodes() {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getEpisodes() {
    const response = await fetch(`https://breakingbadapi.com/api/episodes`);
    const data = await response.json();

    setEpisodes(data);
    setIsLoading(false);
  }

  useEffect(() => {
    getEpisodes();
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1>Episodes</h1>
      <p>{JSON.stringify(episodes, null, 2)}</p>
    </div>
  );
}
