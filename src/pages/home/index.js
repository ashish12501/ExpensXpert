import React from 'react'
// import { Navbar } from '../../components/Navbar'
import './home.css'

export function Home() {
    return (
        <div className='homeScreen'>
            {/* <Navbar /> */}
            <div className='homeScreenBox'>
                <div className='hero'>
                    <h1>Welcome to ExpensXpert !</h1>
                    <h3>An efficient way to add, view, edit, delete and track your expenses.</h3>
                    <button className='startButton'>Start Tracking ></button>
                </div>
            </div>

        </div>
    )
}


