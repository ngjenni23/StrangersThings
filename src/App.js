import React, { useEffect, useState }   from 'react';
import { BASE_URL } from './api';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(BASE_URL);
    }
    fetchPosts();
  }, []);


  return <>
  <h1>
    Posts
  </h1>
    </>
}

export default App;