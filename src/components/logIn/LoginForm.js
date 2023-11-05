import React from 'react'
import './Login.css'
export default function LoginForm(prop) {
    return (
        <div>
            <div className="form-child">
                <form>
                    <ul>
                        <li>
                            <label>Mobile Number / Email ID <br />
                                <input type="text" placeholder='Mobile Number / Email ID' />
                            </label>
                        </li>
                        <li>
                            <label>Password <br />
                                <input type="password" placeholder='Password' />
                            </label>
                        </li>
                    </ul>
                </form>
                <div className="forget-pass">
                    <p>Forgot Password?</p>
                </div>
                <div className="submit-btn">
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}
