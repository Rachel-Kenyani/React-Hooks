

import React, { useState } from "react";
import "./style.css";
import { FaRegUser, FaSistrix } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    console.log({ data });

    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="body">
      <nav className="nav">
        <div>
          <h1 className="h1">Kiosk</h1>
        </div>
        <div className="link">
          <a href="#home">Home</a>
          <Link to="/login">
            <a href="#icon1" className="icon1">
              <FaSistrix fill="antiquewhite" />
            </a>
          </Link>
          <Link to="/login">
            <a href="#icon1" className="icon1">
              <FaRegUser fill="antiquewhite" />
            </a>
          </Link>
        </div>
      </nav>
      <form className="form" onSubmit={handleSubmit}>
        <FaRegUser fill="antiquewhite" className="yellow" />
        <h1>Login</h1>

        <input
          placeholder="Enter Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <br />

        <input
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <br />

        <Link to="/products">
          <button className="button" type="submit">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
