import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__top">
                <Link to='/music_and_life/'>
                <div className="logo">
                    <div className="logo__img">
                        <img src={require('../../img/heart-logo-96.png')} alt='logo'/>
                    </div>
                    <div className="logo__text">
                        <span>Music&Life</span>
                    </div>
                </div>
                </Link>
                <nav>
                    <ul className="footer__links">
                        <li>
                            <Link to='/music_and_life/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/music_and_life/search'>Search</Link>
                        </li>
                        <li>
                            <Link to='/music_and_life/about'>About</Link>
                        </li>
                    </ul>
                </nav>
                </div>
                <hr/>
                <div className="footer__bottom">
                    <p>2022 © All rights reserved</p>
                </div>
            </footer>
        </>
    ) 
}

export default Footer;