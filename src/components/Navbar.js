import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import './navbar.css'

export function Navbar() {
    return (
        <div className='Navbar'>
            <div className='navbarLogo'><img src={logo} alt="logo" /></div>
            <div className='navbuttons'>
                <Link className='loginButton' to='/login'>Login</Link>
                <Link className='registerButton' to='/register'>Register</Link>
            </div>
        </div>
    )
}
