import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";

export default function Signup() {
  const [imageSrc, setImageSrc] = useState("");

  const [formState, setFormState] = useState({
    username: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState({ username: "", password: "" });
  };

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
