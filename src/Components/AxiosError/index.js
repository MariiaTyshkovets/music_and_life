import React from "react";
import { Link, useLocation } from "react-router-dom";
import './AxiosError.scss';

const AxiosError = () => {
    let location = useLocation();
    let error = location.state === null ? 'There are no axios issues right now.' : location.state.error;
    
    return (
        <>
            <section className='error'>
                <div className="error__container">
                    <h3>{error}</h3>
                    <p>
                        If you want to find music, lyrics or artist go to 
                        <span>
                            <Link to='/music_and_life/'> Home</Link>
                        </span> page. Make sure your Internet is working.
                    </p>
                </div>
            </section>
        </>
    )
}

export default AxiosError;