import React from 'react'
import "./register.css"
import {Link} from "react-router-dom"
import { Form, Input, Button } from "antd";
import loginImg from './login.png'


export default function Register() {
  const FormItem = Form.Item;

  return (
    <div>
      <div className="lContainer">
        <div className="lItem">
          <div className="loginImage">
            <img src={loginImg} width="300" style={{ position: 'relative' }} alt="login" />
          </div>
          <div className="loginForm">
            <h2 className='loginTitle'>Register</h2>
            <form className="login-form">
              <FormItem>
                <Input
                  placeholder="First Name"
                />
              </FormItem>
              <FormItem>
                <Input
                  placeholder="Last Name"
                />
              </FormItem>
              <FormItem>
                <Input
                  type="email"
                  placeholder="Email"
                />
              </FormItem>
              <FormItem>
                <Input
                  type="password"
                  placeholder="Password"
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
