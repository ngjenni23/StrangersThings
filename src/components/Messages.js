import React,{ useState } from "react";
import { myData } from "./renderHelpers";

myData();

const Messages = ({ token }) => {
    const [user, setUser] = useState("");
    const container = document.getElementById('container')
    const handleSubmit = async event => {
        event.preventDefault();
        const userObj = await myData(token);
        setUser(userObj);

        for (let i = 0; i < 100; i++) {
            let content = user.data.messages[i].content;
            let sender = user.data.messages[i].fromUser.username;
            let onPost = user.data.messages[i].post.title;
            console.log("String", user.data.messages)
            container.innerHTML += `From ${sender} on post ${onPost}: <br>${content}</br>`
        }
    }
    return <>
        <form onSubmit={handleSubmit}>
            <div id="container">
                <button type="submit">Double Click to View Messages</button>
            </div>
        </form>
    </>
}
 
export default Messages