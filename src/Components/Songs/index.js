import React from "react";
import SearchSong from "../SearchSong";
import "./Songs.scss";

const Songs = (props) => {
    
    return (
        <>
            <section className="songs"> 
                {props.search.map((value, index) => <SearchSong key={value.result.id + index} info={value.result}/>)}
            </section>
        </>
    )     
}   

export default Songs;