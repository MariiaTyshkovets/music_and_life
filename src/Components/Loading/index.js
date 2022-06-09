import React from "react";
import './Loading.scss';

const Loading = () => {
    return (
        <>
            <div className="loader">
                <div className="bubble">
                    <div className="bubble__shine bubble__shine--lg"></div>
                    <div className="bubble__shine.bubble__shine--sm"></div>
                </div>
                <p className="text">
                    Lo
                    <span className="text__highlight">a</span>
                    din
                    <span className="text__highlight">g</span>
                </p>
            </div>
        </>
    )
}

export default Loading;