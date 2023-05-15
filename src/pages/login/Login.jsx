import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.css';
import axios from "axios";
import { Form, Input, Button, Checkbox } from "antd";
import loginImg from './login.png'

export default function Login() {
  const FormItem = Form.Item;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (event) => {
    event.preventDefault();
    console.log("Form submitted!");
    try {
      const response = await axios.post("http://192.168.35.117:8000/api/login", { email, password });
      console.log(response.data);
      setEmail("");
      setPassword("");
      navigate("/");
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
            <h2 className='loginTitle'>Login</h2>
            <form className="login-form" onSubmit={handleRegister}>
              <FormItem>
                <Input
                  placeholder="Username"
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
                <Checkbox style={{ marginTop: '5px' }}>Remember me</Checkbox>
              </FormItem>
              <FormItem className='btnFormItem'>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </FormItem>
              <FormItem>
                <span>Don't have an account? </span>
                <Link to="/register">Register now!</Link>
              </FormItem>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
