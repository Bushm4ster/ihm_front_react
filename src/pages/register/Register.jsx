import React, {useState} from 'react'
import "./register.css"
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom"
import { Form, Input, Button, Checkbox } from "antd";
import loginImg from './login.png'


export default function Register() {
  const FormItem = Form.Item;

  const [prenom , setprenom] = useState('');
  const [nom , setnom] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const navigate = useNavigate();


  const handleRegister = async (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    try {
      const response = await axios.post("http://192.168.35.117:8000/api/signup", { nom, prenom, email, password });
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
    <div>
      <div className="lContainer">
        <div className="lItem">
          <div className="loginImage">
            <img src={loginImg} width="300" style={{ position: 'relative' }} alt="login" />
          </div>
          <div className="loginForm">
            <h2 className='loginTitle'>Register</h2>
            <form className="login-form" onSubmit={handleRegister}>
              <FormItem>
                <Input
                  placeholder="First Name"
                  value={nom}
                  onChange={(e) => setnom(e.target.value)}
                />
              </FormItem>
              <FormItem>
                <Input
                  placeholder="Last Name"
                  value={prenom}
                  onChange={(e) => setprenom(e.target.value)}
                />
              </FormItem>
              <FormItem>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormItem>
              <FormItem>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormItem>
              {/* <FormItem>
                <Input
                  type="password"
                  placeholder="ReType Password"
                />
              </FormItem> */}
              <FormItem className='btnFormItem'>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Sign Up
                </Button>
              </FormItem>
              <FormItem>
                <span>Already have an account? </span>
                <Link to="/login">Login now!</Link>
              </FormItem>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
