import React, { useState } from "react";
import './Switch.scss';

const Switch = (props) => {

    const [theme, setTheme] = useState(
        localStorage.getItem('theme')
    );
    const [toDark, setToDark ] = useState(0);
    const [toWhite, setToWhite ] = useState(0);  

    const changeTheme = () => {
        if (theme === 'white') {
            setToDark(1);
        } else {
            setToWhite(1);
        }
    }

    const afterAnimation = () => {
        props.changeSystem(theme);
        if (theme === 'white') {
            setToDark(0);
            setTheme('dark') 
        } else {
            setToWhite(0);
            setTheme('white')
        }
    }
    
    return (
        <>
            <div className="switch"
                onClick={() => changeTheme()}
                onAnimationEnd={() => afterAnimation()}
            >
                <div className="toggle-button">
                    <div className={`toggle ${theme}`}
                        todark={toDark}
                        towhite={toWhite}>

                    </div>
                    <div className="moon-mask"></div>
                </div>
            </div>
        </>
    )
}

export default Switch;