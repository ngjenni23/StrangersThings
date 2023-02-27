import React,{ useState } from "react";
import { myData } from "./renderHelpers";

myData();

const MyPosts = ({ token }) => {
    const [user, setUser] = useState("");
    const container = document.getElementById('myPosts');
    const handleSubmit = async (event) => {
        event.preventDefault();
        const userObj = await myData(token);
        setUser(userObj);

        for (let i = 0; i < 100; i++) {
            console.log("String", user.data.posts[0])
            let myPostHTML = `
                <h3>${user.data.posts[i].title}</h3>
                <h4>Price: ${user.data.posts[i].price}<h4>
                <p>${user.data.posts[i].description}</p>
                <p>Location: ${user.data.posts[i].location}</p>
                <p>${user.data.posts[i].willDeliver ? "Delivery Available" : "No Delivery"}</p>
            `
            container.innerHTML += myPostHTML;
        }
    }
    return <>
        <form onSubmit={handleSubmit}>
            <button type="submit">Double Click to View Posts</button>
            <div id="myPosts">
            </div>
        </form>
    </>
}
 
export default MyPosts