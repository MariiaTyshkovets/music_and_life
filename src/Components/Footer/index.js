import React from "react";
import { Link } from "react-router-dom";
import './Footer.scss';

const Footer = () => {
    return (
        <>
            <footer className="footer">
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
                    <ul>
                        <li>
                            {/* <Link></Link> */}
                        </li>
                        <li>
                            {/* <Link></Link> */}
                        </li>
                        <li>
                            {/* <Link></Link> */}
                        </li>
                        <li>
                            {/* <Link></Link> */}
                        </li>
                    </ul>
                </nav>
            </footer>
        </>
    ) 
}

export default Footer;