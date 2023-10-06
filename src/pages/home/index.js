// import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import './home.css'
// import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../../App'


export function Home() {
    // const { userData } = useContext(AppContext)
    // const navigate = useNavigate();

    // useEffect(() => {
    //     if (userData) {
    //         navigate("/tracker")
    //     }
    // })
    return (
        <div className='homeScreen'>
            <div className='homeScreenBox'>
                <div className='hero'>
                    <h1>Welcome to ExpensXpert !</h1>
                    <h3>An efficient way to add, view, edit, delete and track your expenses.</h3>
                    <button className='startButton'><Link to={"/tracker"} className="startButtonLink">Start Tracking </Link ></button>
                </div>
            </div>
        </div >
    )
}


