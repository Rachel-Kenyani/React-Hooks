import React, {useState} from "react";
import './style.css'
import { FaRegUser} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            username: username,
            password: password,
        }
        console.log({data});

        try{
            const response = await fetch('https://dummyjson.com/auth/login',{
            method: 'POST',
            headers:{'Content-Type':'application/json',},
            body : JSON.stringify(data)});
            const result = await response.json()
            console.log(result);
        }
        catch(error){
            console.log(error.message);
        }     
    }

    return(
        <div className="body">
        <form className="form" onSubmit={handleSubmit}>
            <FaRegUser fill="antiquewhite" className='yellow'/>
            <h1>Login</h1>

            <input placeholder="Enter Username" type="text"
            onChange ={(e) => setUsername(e.target.value)} /> 
            <br/>
            <br/>

            <input placeholder="Enter Password" type="password"
            onChange={(e) => setPassword(e.target.value)}/> 
            <br/>
            <br/>

            <Link to="/products"><button className="button" type="submit">Login</button></Link>
        </form>
        </div>
    );
}
export default Login;