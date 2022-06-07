import React, { useState } from "react";
import './Search.scss';
import { useNavigate } from 'react-router-dom';

const Search = () => {

    const [searchText, setSearchText] = useState('');
    const navigate = useNavigate();


    const inputChange = (e) => {
        setSearchText(e.target.value)
    }

    const goTo = () => {
        navigate("/music_and_life/search", {
            replace: false, state: {
                searchText: searchText
            }
        })
    }
    

    return (
        <>
            <div className="search">
                <div className="search__form">
                    <input type='text' placeholder="Start your search" 
                        onChange={inputChange}
                        value={searchText}
                        onKeyPress={(event) => {
                            if (event.key === "Enter" && searchText.length > 0) {
                                goTo(event);
                            }
                        }}
                        required/>
                    <button 
                        className="search__btn" 
                        type='button'
                        disabled={searchText.length < 1} 
                        onClick={(e) => {
                            goTo(e);
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
                            <path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )   
}

export default Search;