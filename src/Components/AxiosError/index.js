import React from "react";
import { Link, useLocation } from "react-router-dom";
import './AxiosError.scss';

const AxiosError = () => {
    let location = useLocation();
    let error = location.state === null ? 'There are no axios issues right now.' : location.state.error;
    

    const errorStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        borderRadius: '10px'
    }

    return (
        <>
            <div style={{minHeight: '90vh', padding: '12% 40px 40px'}}>
            <div style={errorStyle} className='error'>
                <h3>{error}</h3>
                <p style={{fontSize: '20px', textAlign: 'center'}}>
                    If you want to find music, lyrics or artist go to 
                    <span style={{ fontWeight: '600', fontSize: '24px' }}>
                        <Link to='/music_and_life/'> Home</Link>
                    </span> page. Make sure your Internet is working.
                </p>
            </div>
            </div>
        </>
    )
}

export default AxiosError;