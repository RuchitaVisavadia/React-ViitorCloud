import React, { useState } from "react";
import ReactDom from "react-dom";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("abc");
  const [password, setPassword] = useState("123");
  const [user, setUser] = useState()

  const handleSubmit = async e => {
    
  };

// if there's a user show the message below
  if (user) {
    return <div>{user.name} is loggged in</div>;
  }

  // if there's no user, show the login form
  return (
    
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        placeholder="enter a username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
      <h5>Don't have an account?</h5>
      <button type="Submit">Signup</button>
    </form>
  );
};

export default Login;
