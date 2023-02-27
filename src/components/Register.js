import React, { useState } from "react";
import { BASE_URL } from "../api";

async function registration(credentials) {
    return fetch(`${BASE_URL}/users/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(response => response.json())
    .then(result => {
      console.log(result);
      return result;
    })
    .catch(console.error);
}
const Register = ({ setToken, token }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleRegistration = async event => {
        event.preventDefault();
        const userObj = await registration({
          user: {username,
          password}
        });
        setToken(userObj.data.token);
        alert("Registration Sucessful");
    }
    return (
        <>
        <form onSubmit={handleRegistration} className="register">
            <input type="text" placeholder="Username" onChange={(event) => setUsername(event.target.value)}/>
            <input type="text" placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
            <button type="submit">Register</button>
        </form>
        </>
    )
}

export default Register