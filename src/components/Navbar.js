import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return <>
        <Link to="/Home">Home</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/LoginRegister">Login or Register</Link>
    </>
}

export default Navbar