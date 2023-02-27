import React, { useState } from "react";


const Search = () => {
   const [posts, setPosts] = useState([]);
   const [searchTerm, setSearchTerm] = useState('');

   function postMatches(post, text) {
      if (text === post.title || post.description) {
         return true;
      }
   }

   const filteredPosts = posts.filter(post => postMatches(post, searchTerm));
   const postsToDisplay = searchTerm.length ? filteredPosts : posts;

   return <>
   <input type="text" placeholder="Seach Posts"/>
   <button className="search">Search</button>
   </>
}

export default Search;