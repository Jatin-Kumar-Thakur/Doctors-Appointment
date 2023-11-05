import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

export default function LoginForm(prop) {
    return (
        <div>
            <div className="form-child">
                <form>
                    <ul>
                        <li>
                            <label>Full Name <br />
                                <input type="text" placeholder='Full Name' required/>
                            </label>
                        </li>
                        <li>
                            <label>Mobile Number<br />
                                <input type="phone" placeholder='Mobile Number' required/>
                            </label>
                        </li>
                        <li>
                            <label>Email ID <br />
                                <input type="email" placeholder='Email ID' />
                            </label>
                        </li>
                        <li>
                            <label>Create Password <br />
                                <input type="password" placeholder='Password' required/>
                            </label>
                        </li>
                        <li>
                            <label>Check Password <br />
                                <input type="password" placeholder='Password' required/>
                            </label>
                        </li>
                        <li>
                            <p className='doc-signup'><Link to="/docSignup" className='doc-signup-text'>Are You a Doctor?</Link></p>
                        </li>

                    </ul>
                </form>
                <div className="submit-btn">
                    <button>Register</button>
                </div>
            </div>
        </div>
    )
}
