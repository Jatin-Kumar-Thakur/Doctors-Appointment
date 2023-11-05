import React from 'react'
import { useState } from 'react';
import './Login.css';
import img1 from '../images/login_side.png';
import LoginForm from './LoginForm';
import SigninForm from './SigninForm';

export default function Login(prop) {

  const [login, setlogin] = useState(true);
  return (
    <div className='main-container'>
      <div className="container">
        <div className="login_header">
          <ul>
            <li onClick={() => setlogin(true)}>Login</li>
            <li onClick={() => setlogin(false)}>Register</li>
          </ul>
        </div>
        <div className="form-container">
          <div className="form-image">
            <img src={img1} alt="" />
          </div>
          <div className="form-data">
            {login ? <LoginForm /> : <SigninForm />}
          </div>
        </div>
      </div>
    </div>
  )
}
