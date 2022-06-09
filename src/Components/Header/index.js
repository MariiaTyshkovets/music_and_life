import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Switch from "../Switch";
import { slide as Menu } from 'react-burger-menu'
import './Header.scss';

const Header = (props) => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme')
    );

    const navigate = useNavigate();

    useEffect(() => {
        if (props.theme === 'white') {
            setTheme('white')
        } else {
            setTheme('dark')
        }
    }, [props.theme])

    let activeStyleDark = {
        color: 'white',
    };

    let activeStyle = {
        color: 'black',
    };

    return (
        <>
            <header className="header">
                <div id="outer-container" className="header__burger">
                    <Menu>
                        <NavLink to='/music_and_life/' className="menu-item"
                            style={({ isActive }) => isActive ? (theme === 'white' ? activeStyle : activeStyleDark) : undefined}>
                                Home
                        </NavLink>
                        <NavLink to='/music_and_life/search'className="menu-item"
                            style={({ isActive }) => isActive ? (theme === 'white' ? activeStyle : activeStyleDark) : undefined}>
                                Search
                        </NavLink>
                        <NavLink to='/music_and_life/about'className="menu-item"
                            style={({ isActive }) => isActive ? (theme === 'white' ? activeStyle : activeStyleDark) : undefined}>
                                About
                        </NavLink>
                    </Menu>
                </div>
                <div className="logo" onClick={() => navigate('/music_and_life/')}>
                    <div className="logo__img">
                        <img src={require('../../img/heart-logo-96.png')} alt='logo'/>
                    </div>
                    <div className="logo__text">
                        <span>Music&Life</span>
                    </div>
                </div>
                
                <nav className="header__nav">
                    <ul className="navigation">
                        <li>
                            <NavLink to='/music_and_life/'
                            style={({ isActive }) => isActive ? (theme === 'white' ? activeStyle : activeStyleDark) : undefined}>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/music_and_life/search'
                            style={({ isActive }) => isActive ? (theme === 'white' ? activeStyle : activeStyleDark) : undefined}>
                                Search
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/music_and_life/about'className="menu-item"
                                style={({ isActive }) => isActive ? (theme === 'white' ? activeStyle : activeStyleDark) : undefined}>
                                    About
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch changeSystem={props.changeSystem}/>
            </header>
        </>
    ) 
}

export default Header;