import React from "react";
import { Link } from "react-router-dom";
import './NotFoundPage.scss';

const NotFoudPage = () => {
    return (
        <>
        <section className="not-found">
            <div className="not-found__container">
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
            </div>
        </section>
        </>
    )
}

export default NotFoudPage;