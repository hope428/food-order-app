import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useMutation } from "@apollo/client";
import { ADD_USER } from '../utils/mutations';
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";

export default function Signup() {
  //holds image source from cloudinary widget
  const [imageSrc, setImageSrc] = useState("");

  const [addUser] = useMutation(ADD_USER)

  //holds username and pw
  const [formState, setFormState] = useState({
    username: "",
    password: "",
  });

  //handles form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const mutationResponse = await addUser({
        variables: {
            username: formState.username,
            password: formState.password,
            profilePic: imageSrc
        }
    })
    console.log("Success!" + mutationResponse.data.addUser);
    setFormState({ username: "", password: "" });
  };

  //handles typing in username and pw form fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          placeholder="Username"
          name="username"
          type="username"
          id="username"
          value={formState.username}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          placeholder="Password"
          name="password"
          type="password"
          id="password"
          value={formState.password}
          onChange={handleChange}
        />
        <CloudinaryUploadWidget setImageSrc={setImageSrc} imageSrc={imageSrc} />
        <button type="submit">Sign up!</button>
      </form>
    </div>
  );
}
