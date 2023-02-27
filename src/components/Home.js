import React, { useState } from "react";
import Search from "./Search";
import PostForm from "./PostForm";
import Posts from "./Posts";


const Home = () => {
    const [token, setToken] = useState('');
    return <>
        <div className="postHeader">
            <h3>Home</h3>
            <p><Search /></p>
        </div>
        <div>
            <PostForm setToken={setToken}token={token}/>
        </div>
        <Posts token={token}/>
    </>
}

export default Home;