import React, { useState } from "react";
import { BASE_URL } from "../api";


const Register = () => {
    const [username, setUsername] = useState[""];
    const [password, setPassword] = useState[""];

    const handleSubmit = (event) => {
        event.preventDefault();

        const resp = fetch(`${BASE_URL}/users/register`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username,
                    password
                }
            })
        }).then(resp => resp.json())
        .then(result => {
            console.log(result);
        })
        .catch(console.error);
    }
   

    return (
        <>
        <form>
            <input type="text">Username</input>
            <input type="text">Password</input>
            <button type="submit">Register</button>
        </form>
        </>
    )
}