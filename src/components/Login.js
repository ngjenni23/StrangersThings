import React, { useState } from "react";
import { BASE_URL } from "../api";

async function userLogin(credentials) {
    return fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(credentials)
    }).then (response => response.json())
    .then (result => {
        console.log(result);
        return result;
    })
    .catch(console.error,
        alert("Username or Password Incorrect"));
}

const Login = ({ setToken, token}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async event => {
        event.preventDefault();
        const userObj = await userLogin({
            user: {username,
                password}
        });
        setToken(userObj.data.token);
        alert(`Welcome ${username}`)
    }
     return <>
        <form onSubmit={handleLogin}> 
            <input type="text" placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
            <input type="text" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
            <button type="submit">Log In</button>
        </form>
     </>
}
    
export default Login