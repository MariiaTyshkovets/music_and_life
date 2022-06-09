import React from "react";
import { Link } from "react-router-dom";
import './NotFoudPage.scss';

const NotFoudPage = () => {
    return (
        <>
        <section className="not-found">
            <h2>
                Lost your way?
            </h2>
            <p>Sorry, we can't find that page.</p>
            <p>Follow the link to start your search.</p>
            <div className="btn-container">
                <Link to='/music_and_life/'>
                    <button  className='btn' type="button">
                        Go To Home
                    </button>
                </Link>
            </div>
        </section>
        </>
    )
}

export default NotFoudPage;