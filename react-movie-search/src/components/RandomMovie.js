import React, { useEffect, useState } from 'react';

export default function RandomMovie() {
  const [random, setRandom] = useState([]);

  async function randomMovie() {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=4e6a1064e598fc7775b77627eaf33da0&language=en-US&page=1`
    );

    const data = await res.json();

    setRandom(data);
  }

  useEffect(() => {
    randomMovie();
  }, []);

  if(random) return <div>Loading</div>

  console.log(random);

  return <div><h1>Hi</h1></div>;
}
