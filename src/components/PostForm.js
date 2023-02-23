import React, { useState } from "react";
import { BASE_URL } from "../api";
import { showPostForm, closePostForm } from  "./renderHelpers";

const PostForm = (posts, setPosts, token) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('title, description:', title, description);

        const resp = await fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                post: {
                    title,
                    description
                }
            })
        })
        const result = await resp.json();
        console.log("result:", result);
        setPosts([result, ...result.data.posts]);
    }

    return <> 
        <button className="postForm" onClick={showPostForm}>
            Create a Post
        </button>
        <form id="postForm" onSubmit={handleSubmit}>
            <button className="closeForm" onClick={closePostForm}>&times;</button>
            <input className="title" type="text" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}></input>
            <input className="descr" type = "text" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)}></input>
                <button type="submit" className="submitForm">Submit</button>
        </form>
    </>
}

export default PostForm;