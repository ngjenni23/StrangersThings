import React, { useState, useEffect } from "react";
import { BASE_URL } from "../api";
import PostForm from "./PostForm";
import Search from "./Search";
import { showMessageForm, closeMessageForm } from "./renderHelpers";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    console.log("posts:", posts)

    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch(`${BASE_URL}/posts`);
            const result = await resp.json();
            setPosts(result.data.posts);
        }
        fetchPosts();
    }, [])
    return <>
    <h3>
        Posts
        <Search />
        <PostForm />
    </h3>
    {
        posts.map(post =>
        <div className="postContainer" 
            key={post.id} >
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button onClick={showMessageForm}>Message</button>
            <form id="message">
                <button className="closeForm" onClick={closeMessageForm}>&times;</button>
                <input type="text"></input>
                <button type="submit" className="submitForm">Send</button>
            </form>
        </div>)
    }
    </> 
}

export default Posts;