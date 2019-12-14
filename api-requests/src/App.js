import React, { useState, useEffect } from 'react';
import './App.css';

const postIds = [1, 2, 3, 4, 5, 6, 7, 8];

function fetchPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res =>
    res.json()
  );
}

function App() {
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchPost(postIds[index])
      .then(post => {
        setPost(post);
        setError(null);
        setLoading(false);
      })
      .catch(err => {
        console.warn(err.message);
        setError('Error fetching data. Try again.');
        setLoading(false);
      });
  }, [index]);

  const incrementIndex = () => {
    setIndex(i => (i === postIds.length - 1 ? i : i + 1));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <>
        <p>{error}</p>
        <button onClick={incrementIndex}>Next Post</button>
      </>
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
