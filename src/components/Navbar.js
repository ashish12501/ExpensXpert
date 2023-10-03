import React, { useContext } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import './navbar.css'
import { AppContext } from '../App'


export function Navbar() {
    const { userData } = useContext(AppContext)
    let userName;
    if (userData.displayName) {
        userName = userData.displayName;
    } else {
        userName = "GuestUser";
    }


    if (userData.uid) {
        return (
            <div className='Navbar'>
                <div className='navbarLogo'><img src={logo} alt="logo" /></div>
                <div className='navbuttons'>
                    <img src={userData.photoURL} alt='' />
                    <h3> {userName} </h3>
                </div>
            </div>
        )
    }
    else return (
        <div className='Navbar'>
            <div className='navbarLogo'><img src={logo} alt="logo" /></div>
            <div className='navbuttons'>
                <Link className='loginButton' to='/login'>Login</Link>
                <Link className='registerButton' to='/register'>Register</Link>
            </div>
        </div>
    )
}
