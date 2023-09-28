import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

export function Login() {
    return (
        <div className="registerpage">
            <div className="registerform">
                <h1>Welcome Back!</h1>
                <p>Login into your account</p>
                <form>
                    <input
                        type="text"
                        placeholder="Enter Email" />
                    <input
                        type="password"
                        placeholder="Password" />
                    <button type='button' className="registerbtn" />

                </form>
                <p className='alternate'>Did't have an account ? <Link>register</Link></p>
            </div>
        </div>
    )
}

