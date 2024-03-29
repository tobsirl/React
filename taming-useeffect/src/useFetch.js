import { useState, useEffect } from 'react';

export const useFetch = (options) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (options.url) {
      console.log('useFetch useEffect');
      fetch(options.url)
        .then((response) => response.json())
        .then((json) => {
          options.onSuccess?.(json);
          setData(json);
        });
    }
  }, [options.url]);

  return {
    data,
  };
};
