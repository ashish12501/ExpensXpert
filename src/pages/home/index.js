import React, { useEffect, useContext } from 'react'
import './home.css'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../App'
import { Footer } from '../../components/footer'
import { Grid } from 'react-loader-spinner'

export function Home() {
    const { userData, loading } = useContext(AppContext)
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading) {
            if (userData) {
                navigate("/tracker");
            } else {
                navigate("/");
            }
        }
    }, [userData, loading, navigate]);

    const startTracking = () => {
        if (userData) {
            navigate("/tracker");
        } else {
            navigate("/login");
        }
    }

    if (loading) {
        return (
            <div className='LoaderBox'>
                <div className="Loader">
                    <Grid
                        height="45"
                        width="45"
                        color="#ffffff"
                        ariaLabel="grid-loading"
                        radius="12.5"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                    />
                </div>
            </div>
        )
    }
    else {
        return (
            <>
                <div className='homeScreen'>
                    <div className='homeScreenBox'>
                        <div className='hero'>
                            <h1>Welcome to ExpensXpert!</h1>
                            <h3>An efficient way to add, view, edit, delete and track your expenses.</h3>
                            <button className='startButton' onClick={startTracking}>Start Tracking</button>
                        </div>
                    </div>
                </div >
                <Footer />
            </>
        )
    }

}


