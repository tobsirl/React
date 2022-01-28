import React, { useState } from 'react';

export const useFetch = (options) => {
  const [data, setData] = useState(null);

  return {
    data,
  };
};
