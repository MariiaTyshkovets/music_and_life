import React from "react";

const ButtonToTop = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }
    return (
        <>
            <button  className='btn btn-top' type="button" onClick={scrollToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="5 12 12 5 19 12"></polyline>
                    <line x1="12" y1="19" x2="12" y2="5"></line>
                </svg>
            </button>
        </>
    )
}

export default ButtonToTop;