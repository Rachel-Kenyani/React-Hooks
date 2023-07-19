import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './style.css'
import { FaRegUser, FaSistrix } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false); // State variable for login success
  const navigate = useNavigate();





    const handleSubmit = async (e) => {
      e.preventDefault();
      const data = {
        username: username,
        password: password,
      }
  
      try {
        const response = await fetch('https://dummyjson.com/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
  
        const result = await response.json();
        console.log(result);
  
        // Check if login is successful
        if (result.success) {
          setLoginSuccess(true); // Set login success state to true
          console.log('Success')
          navigate("/products");
        }
        else{
          setLoginSuccess(false);
          console.log('Unsuccessful')
        }
      } catch (error) {
        console.log(error.message);
      }
    }

  

  return (
    <div className="body">
      <nav className="nav">
        <div><h1 className="h1">Kiosk</h1></div>
        <div className="link">
          <ul>
            <li>Home</li>
            <Link to="/"><li className="icon1"><FaSistrix fill="antiquewhite" /></li></Link>
            <Link to="/"><li className="icon1"><FaRegUser fill="antiquewhite" /></li></Link>
          </ul>
        </div>
      </nav>
      <form className="form" onSubmit={handleSubmit}>
        <FaRegUser fill="antiquewhite" className='yellow' />
        <h1>Login</h1>

        <input
          placeholder="Enter Username"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /><br />

        <input
          placeholder="Enter Password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /><br />

        {/* Conditional rendering of login success message */}
        {loginSuccess && <p>Login Successful!</p>}

        <Link to="/products">
          <button className="button" type="submit">Login</button>
         </Link>
      </form>
    </div>
  );
}

export default Login;
