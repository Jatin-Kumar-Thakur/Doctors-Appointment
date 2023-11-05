import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
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
                        <Link to="/login"><li>Login</li></Link>
                        <li>Register</li>
                    </ul>
                </div>
                <div className="form-container">
                    <div className="form-image">
                        <img src={img1} alt="" />
                    </div>
                    <div className="form-data">
                        <div className="form-child">
                            <form>
                                <ul>
                                    <li>
                                        <label>Full Name <br />
                                            <input type="text" placeholder='Full Name' required />
                                        </label>
                                    </li>
                                    <li>
                                        <label>Mobile Number<br />
                                            <input type="phone" placeholder='Mobile Number' required />
                                        </label>
                                    </li>
                                    <li>
                                        <label>Email ID <br />
                                            <input type="email" placeholder='Email ID' />
                                        </label>
                                    </li>
                                    <li>
                                        <label>Registration Number <br />
                                            <input type="text" placeholder='Reg Number' required/>
                                        </label>
                                    </li>
                                    <li>
                                        <label>Address <br />
                                            <input type="text" placeholder='Address' required/>
                                        </label>
                                    </li>
                                    <li>
                                        <label>Create Password <br />
                                            <input type="password" placeholder='Password' required />
                                        </label>
                                    </li>
                                    <li>
                                        <label>Check Password <br />
                                            <input type="password" placeholder='Password' required />
                                        </label>
                                    </li>
                                    

                                </ul>
                            </form>
                            <div className="submit-btn">
                                <button>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
