import React, { useEffect, useReducer } from 'react';
import './App.css';

function fetchReducer(state, action) {
  if (action.type === 'fetch') {
    return {
      ...state,
      loading: true
    };
  } else if (action.type === 'success') {
    return {
      data: action.data,
      error: null,
      loading: false
    };
  } else if (action.type === 'error') {
    return {
      ...state,
      error: 'Error fetching data. Try again',
      loading: false
    };
  } else {
    throw new Error(`That action is not supproted`);
  }
}

function useFetch(url) {
  const initialState = {
    data: null,
    loading: true,
    error: null
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'fetch' });

    fetch(url)
      .then(res => res.json())
      .then(data => dispatch({ type: 'success', data }))
      .catch(error => {
        console.warn(error.message);
        dispatch({ type: 'error' });
      });
  }, [url]);

  return {
    loading: state.loading,
    data: state.data,
    error: state.error
  };
}

const postIds = [1, 2, 3, 4, 5, 6, 7, 8];

function App() {
  const [index, setIndex] = React.useState(0);

  const { loading, data: post, error } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postIds[index]}`
  );

  const incrementIndex = () => {
    setIndex(i => (i === postIds.length - 1 ? i : i + 1));
  };

  if (loading === true) {
    return <p className="loading">Loading</p>;
  }

  if (error) {
    return (
      <React.Fragment>
        <p>{error}</p>
        <button onClick={incrementIndex}>Next Post</button>
      </React.Fragment>
    );
  }

  return (
    <div className="App">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      {index === postIds.length - 1 ? (
        <p>No more posts</p>
      ) : (
        <button onClick={incrementIndex}>Next Post</button>
      )}
    </div>
  );
}

export default App;
