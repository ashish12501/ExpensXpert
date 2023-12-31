import React, { useState } from 'react'
import './login.css'
import Facebook from '../../images/facebook.png'
import Google from '../../images/google.png'
import User from '../../images/user.png'
import { signInAnonymously } from 'firebase/auth'
import { auth, provider, fbProvider } from '../../config/firebase-config';
import { Footer } from '../../components/footer'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


export function Login() {

    const [buttonClick1, setButtonClick1] = useState(false)
    const [buttonClick2, setButtonClick2] = useState(false)
    const [buttonClick3, setButtonClick3] = useState(false)

    const navigate = useNavigate();
    const authenticateUsingGoogle = async () => {
        try {
            setButtonClick1(true);
            setButtonClick2(false);
            setButtonClick3(false);

            const result = await signInWithPopup(auth, provider);
            console.log(result);
            navigate('/tracker')
        } catch (error) {
            console.error("Authentication failed:", error);
        }
    };

    const authenticateUsingFacebook = async () => {
        try {
            setButtonClick2(true);
            setButtonClick1(false);
            setButtonClick3(false);
            const result = await signInWithPopup(auth, fbProvider);
            console.log(result);
            navigate('/tracker')
        } catch (error) {
            console.error("Authentication failed:", error);
        }
    };


    const authenticateAsGuest = async () => {
        try {
            setButtonClick3(true);
            setButtonClick2(false);
            setButtonClick1(false);
            const result = await signInAnonymously(auth);
            console.log(result);
            navigate('/tracker');
        } catch (error) {
            console.error("Anonymous authentication failed:", error);
        }
    };

    return (
        <>
            <div className="registerpage">
                <div className="registerform">
                    <h1>Welcome to ExpensXpert!</h1>
                    <p className='continue'>Signin to Continue</p>
                    <div className='loginButtons' >
                        <button className={buttonClick1 ? "active" : "google"} onClick={authenticateUsingGoogle}><img alt="" src={Google} /> Continue with Google </button>
                        <button className={(buttonClick2 ? "factive" : "facebook")} onClick={authenticateUsingFacebook}><img alt="" src={Facebook} />Continue with Facebook</button>
                        <p className='or'>Or</p>
                        <button className={buttonClick3 ? "active" : "guest"} onClick={authenticateAsGuest}><img alt="" src={User} />Continue as Guest</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

