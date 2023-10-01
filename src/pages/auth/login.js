import React from 'react'
import './login.css'
import Facebook from '../../images/facebook.png'
import Google from '../../images/google.png'
import User from '../../images/user.png'
import { signInAnonymously } from 'firebase/auth'
// import { auth, provider, fbProvider, SignInAnonymously } from '../../config/firebase-config'
import { auth, provider, fbProvider } from '../../config/firebase-config';

import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
<<<<<<< HEAD
=======
// APP Id 1030175948410340
// secret a5cbce89b5575c379adf8ec5a9a5f443
>>>>>>> 919a77f... added authentication
export function Login() {
    const navigate = useNavigate();
    const authenticateUsingGoogle = async () => {
        const result = await signInWithPopup(auth, provider);
        console.log(result);
        navigate('/tracker')
    };

    const authenticateUsingFacebook = async () => {
        const result = await signInWithPopup(auth, fbProvider);
        console.log(result);
        navigate('/tracker')
    };


    const authenticateAsGuest = async () => {
        try {
            const result = await signInAnonymously(auth);
            console.log(result);
            navigate('/tracker');
        } catch (error) {
            console.error("Anonymous authentication failed:", error);
        }
    };

    return (
        <div className="registerpage">
            <div className="registerform">
                <h1>Welcome to ExpensXpert!</h1>
                <p className='continue'>Signin to Continue</p>
                <div className='loginButtons' >
                    <button className='google' onClick={authenticateUsingGoogle}><img alt="" src={Google} /> Continue with Google </button>
                    <button className='facebook' onClick={authenticateUsingFacebook}><img alt="" src={Facebook} />Continue with Facebook</button>
                    <p className='or'>Or</p>
                    <button className='guest' onClick={authenticateAsGuest}><img alt="" src={User} />Continue as Guest</button>
                </div>
            </div>
        </div>
    )
}

