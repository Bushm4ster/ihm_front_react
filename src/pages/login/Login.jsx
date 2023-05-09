import React from 'react'
import "./login.css"
import {useState} from 'react'
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom"

export default function Login() {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const navigate = useNavigate();


  
  const handleRegister = async (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    try {
      const response = await axios.post("http://192.168.35.117:80/api/login", { email, password });
      console.log(response.data);
      setEmail("");
      setPassword("");
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">NewSocial</h3>
            <span className="loginDesc">
                Connect with friends and the world around you on NewSocial
            </span>
        </div>
        <div className="loginRight">
            <form className="loginBox" onSubmit={handleRegister}>
           
                <input placeholder='Email' className="loginInput" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input placeholder='Password' className="loginInput"value={password} onChange={(e)=>setPassword(e.target.value)} />
                <button className="loginButton" type='submit'>Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <Link to="/register" className='loginRgisterButton' ><button className='btnsignup'>
                    Create a new Account
                </button></Link>
            </form>
        </div>
      </div>
    </div>
  )
}
