import React from 'react'
import "./register.css"
import {useState} from 'react'
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom"

export default function Register() {
  const [prenom , setprenom] = useState('');
  const [nom , setnom] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const navigate = useNavigate();


  const handleRegister = async (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    try {
      const response = await axios.post("http://192.168.35.117:80/api/signup", { nom, prenom, email, password });
      console.log(response.data);
      setnom("");
      setprenom("");
      setEmail("");
      setPassword("");
      navigate("/login");
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
        <div className="loginRight"  >
            <form className="loginBox" onSubmit={handleRegister} >
            <input placeholder='First Name' className="loginInput" value={nom} onChange={(e)=>setnom(e.target.value)}/>
                <input placeholder='Last Name' className="loginInput" value={prenom} onChange={(e)=>setprenom(e.target.value)}/>
                <input placeholder='Email' className="loginInput" value={email} onChange={(e)=>setEmail(e.target.value)} />
                <input placeholder='Password' className="loginInput" value={password} onChange={(e)=>setPassword(e.target.value)} />
                <input placeholder='Password Again' className="loginInput" />
                <div className="loginButton"><button type='submit' className='btnlogin'>Sign up</button></div>
                <Link to='/login' className='loginRgisterButton'><button className='btnsignin'>
                    Log into account
                </button></Link>
            </form>
        </div>
      </div>
    </div>
  )
}
