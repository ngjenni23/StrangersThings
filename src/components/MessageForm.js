import React, { useState } from "react";
import { BASE_URL } from "../api";

function newMessage (postObj, userToken, postID) {
    return fetch(`${BASE_URL}/posts/${postID}/messages`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${userToken}`
        },
        body: JSON.stringify(postObj)
    }).then(response => response.json())
    .then (result => {
        console.log(result);
        return result
    })
    .catch(console.error)
}

const MessageForm = ({ token, postID }) => {
    const [content, setContent] = useState("");
    const [post, setPost] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        const userMessage = {
            message: {content}
        }
        console.log('usermessage:', userMessage);
        console.log("token:", token);
        console.log("postID:", postID);
        newMessage(userMessage, token, postID)
    }

    return <>
     <form onSubmit={handleSubmit}>
        <input type="text" onChange={(event) => setContent(event.target.value)} />
        <button type="submit" className="submitForm">Send Message</button>
    </form>
    </>
}

export default MessageForm;