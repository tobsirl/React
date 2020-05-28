import React, { useEffect, useReducer } from 'react';

function fetchReducer(state, action) {
  if (action.type === 'fetch') {
    return {
      ...state,
      loading: true,
    };
  } else if (action.type === 'success') {
    return {
      data: action.data,
      error: null,
      loading: false,
    };
  } else if (action.type === 'error') {
    return {
      ...state,
      error: `Error fetching data. Try again!`,
      loading: false,
    };
  } else {
    throw new Error(`That action is not supported`);
  }
}

function useFetch(url) {
  const initialState = {
    data: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'fetch' });

    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'success', data }))
      .catch((error) => {
        console.log(error.message);
        dispatch({ type: 'error' });
      });
  }, [url]);

  return {
    loading: state.loading,
    data: state.data,
    error: state.error,
  };
}

export default function RandomMovie() {
  const { loading, data, error } = useFetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=4e6a1064e598fc7775b77627eaf33da0&language=en-US&page=1`
  );

  if (loading === true) {
    return <p>Loading...</p>;
  }

  if (error === true) return <p>{error}</p>;

  const { id, title } = data.results[0];

  return (
    <div>
      <p>{title}</p>
      <p>{id}</p>
    </div>
  );
}
