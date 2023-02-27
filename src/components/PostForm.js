import React, { useState } from "react";
import { BASE_URL } from "../api";

async function newPost(postObj, userToken) {
    return fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${userToken}`
            },
            body: JSON.stringify(postObj)
        }).then(response => response.json())
        .then(result => {
            console.log(result);
            return result;
        })
        .catch(console.error,
            alert("Login or Register to Create a Post"))
}

const PostForm = ({ token }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [delivery, setDelivery] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();
        console.log('title, description:', title, description);

        const obj = {
            post: {
                title,
                description,
                price,
                location,
                delivery
            }
        }; await newPost(obj, token)
    }
    
    return <> 
        <div className="newPost">
            <h3>Create a Post</h3>
            <form id="newPost" onSubmit={handleSubmit}>
                <div className="inputs">
                    <input type="text" placeholder="Title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                    <input type="text" placeholder="$0.00" value={price} onChange={(event) => setPrice(event.target.value)}/>
                    <input type="text" placeholder="City, State" value={location} onChange={(event) => setLocation(event.target.value)}/>
                    <input type="text" placeholder="Description" value={description} onChange={(event) => setDescription(event.target.value)}/>
                </div>
                <div className="delivery">
                    <p>Delivery Available?</p>
                    <input id="Check1" type="radio" value="Yes" onChange={event => setDelivery(true)}/>
                    <label>Yes</label>
                    <input id="Check2" type="radio" value="No" onChange={event => setDelivery(false)}/>
                    <label>No</label>
                </div>
                <button type="submit" className="submitForm">Submit</button>
            </form>
        </div>
    </>
}

export default PostForm;