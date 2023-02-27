import React, { useState } from "react";
import { BASE_URL } from "../api";

const DeletePost = async (token, postID) => {
    try {
      const response = await fetch(`${BASE_URL}/posts/${postID}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }

  
  }

  export default DeletePost;
  