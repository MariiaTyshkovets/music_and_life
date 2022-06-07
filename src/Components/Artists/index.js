import React from "react";
import SearchArtist from "../SearchArtist";

const Artists = (props) => {
    
    return (
        <>
            <section className="songs">
                {props.search.map((value) => <SearchArtist key={value.result.id} info={value.result}/>)}
                <button type="button" className={props.search.length === 0 ? 'btn none' : 'btn'}>See More Artists</button>
            </section>
        </>
    )     
} 

export default Artists;