import React from "react";
import SearchArtist from "../SearchArtist";

const Artists = (props) => {
    
    return (
        <>
            <section className="songs">
                {props.search.map((value, index) => <SearchArtist key={value.result.id + index} info={value.result}/>)}
            </section>
        </>
    )     
} 

export default Artists;