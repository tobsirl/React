import React, { useState, useEffect } from 'react';

export const useFetch = (options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    console.log('useFetch useEffect');
    fetch(options.url)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return {
    data,
  };
};
