import React, {  useEffect, useReducer } from 'react';
import './App.css';

function useFetch(url) {
  const initialState = {
    data: null,
    loading: true,
    error: null,
  }

  const [state, dispatch] = useReducer(fetchReducer, initialState)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(false);

      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        setLoading(false);
        setError(false);
        console.log(data);
      } catch (err) {
        console.warn(err);
        setError('Unable to fetch data. Please Try Again');
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return {
    loading,
    data,
    error
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
