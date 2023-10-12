import React, { useContext } from 'react'
import logo from '../images/logo.png'
import { Link, useNavigate } from 'react-router-dom'
import './navbar.css'
import { AppContext } from '../App'
import transactionIcon from '../images/transactionIcon.png'
import logout from '../images/logout.png'
import home from '../images/home.png'
import { getAuth, signOut } from "firebase/auth";
import { useLocation } from 'react-router-dom'

export function Navbar() {
    const location = useLocation();
    console.log('Current path:', location.pathname);
    const navigate = useNavigate();
    const auth = getAuth();

    const Logout = () => {
        signOut(auth).then(() => {
            navigate('/')
        }).catch((error) => {
            console.log(error)
        });
    }
    const { userData } = useContext(AppContext)
    if (userData) {
        if (userData.uid) {
            return (
                <div className='Navbar'>
                    <div className='navbarLogo'><img src={logo} alt="logo" /></div>
                    <div className='navbuttons'>
                        <Link to={"/"}><img src={logout} alt="" className='listIcon' onClick={Logout} /></Link>

                        {location.pathname === "/transaction-history" ? (
                            <Link to={"/transaction-history"}>
                                <img src={home} alt="" className='listIcon' />
                            </Link>
                        ) : (
                            <Link to={"/transaction-history"}>
                                <img src={transactionIcon} alt="" className='listIcon' />
                            </Link>
                        )}


                        <img src={userData.photoURL} alt='' className='profilePic' />
                    </div>
                </div>
            )
        }
    }
    else {
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
}
