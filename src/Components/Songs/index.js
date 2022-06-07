import React from "react";
import SearchSong from "../SearchSong";
import "./Songs.scss";

const Songs = (props) => {
    
    return (
        <>
            <section className="songs"> 
                {props.search.map((value) => <SearchSong key={value.result.id} info={value.result}/>)}
                <button type="button" className={props.search.length === 0 ? 'btn none' : 'btn'}>See More Songs</button>
            </section>
        </>
    )     
} 

export default Songs;