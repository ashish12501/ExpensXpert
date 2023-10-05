import React, { useContext } from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'
import './navbar.css'
import { AppContext } from '../App'
import transactionIcon from '../images/transactionIcon.png'

export function Navbar() {
    const { userData } = useContext(AppContext)
    if (userData) {
        if (userData.uid) {
            return (
                <div className='Navbar'>
                    <div className='navbarLogo'><img src={logo} alt="logo" /></div>
                    <div className='navbuttons'>
                        <Link to={"/transaction-history"}><img src={transactionIcon} alt="" className='listIcon' /></Link>
                        <img src={userData.photoURL} alt='' className='profilePic' />
                    </div>
                </div>
            )
        }
    }

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
