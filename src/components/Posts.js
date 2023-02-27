import React, { useState, useEffect } from "react";
import { BASE_URL } from "../api";
import MessageForm from "./MessageForm";
import DeletePost from "./DeletePost";

const Posts = ({token, setToken}) => {
    const [posts, setPosts] = useState([]);
    

    const handleDelete = async (token, id) => {
        await DeletePost(token, id)
    }
    console.log("posts:", posts)

    useEffect(() => {
        const fetchPosts = async () => {
            const resp = await fetch(`${BASE_URL}/posts`);
            const result = await resp.json();
            setPosts(result.data.posts);
        }
        fetchPosts();
    }, [])
    return posts.map(post =>
        <div className="postContainer" 
            key={post.id} >
            <div className="postDetails">
                <h3>{post.title} from {post.author.username}</h3>
                <h4>Price: {post.price}</h4>
                <p>{post.description}</p>
                <p>Location: {post.location}</p>
                <p>{post.willDeliver ? "Delivery Available" : "No Delivery"}</p>
            </div>
            <div className="message">
            <h4> Message {post.author.username}</h4>
            <MessageForm token={token} postID={post._id}/>
            <button onClick={(event) => DeletePost(token, post._id)}>Delete</button>
            </div>
        </div>)
}

export default Posts;