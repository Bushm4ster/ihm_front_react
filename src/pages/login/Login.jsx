import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';
import { Form, Input, Button, Checkbox } from "antd";
import loginImg from './login.png'

export default function Login() {
  const FormItem = Form.Item;

  return (
    <div className='logincontainer'>
      <div className="lContainer">
        <div className="lItem">
          <div className="loginImage">
            <img src={loginImg} width="300" style={{ position: 'relative' }} alt="login" />
          </div>
          <div className="loginForm">
            <h2 className='loginTitle'>Login</h2>
            <form className="login-form">
              <FormItem>
                <Input
                  placeholder="Username"
                />
              </FormItem>
              <FormItem>
                <Input
                  type="password"
                  placeholder="Password"
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
