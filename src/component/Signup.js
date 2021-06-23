import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("abc");
  const [Email, setEmail] = useState("abc@gmail.com");
  const [password, setPassword] = useState("123");
  const [user, setUser] = useState()

  const handleSubmit = async e => {
    
  };

  
  return (
    <form onSubmit={handleSubmit}>
        <h1>SignUp</h1>
      <label htmlFor="username">Username: </label>
      <input
        type="text"
        value={username}
        placeholder="enter a username"
        onChange={({ target }) => setUsername(target.value)}
      />
      <div>
        <label htmlFor="Email">EmailId: </label>
        <input
          type="text"
          value={password}
          placeholder="enter a valid Email"
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">password: </label>
        <input
          type="password"
          value={password}
          placeholder="enter a password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default Signup;
