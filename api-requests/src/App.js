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

  return (
    <div className="App">
      <h1>App</h1>
    </div>
  );
}

export default App;
