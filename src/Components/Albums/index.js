import React from "react";
import SearchAlbum from "../SearchAlbum";

const Albums = (props) => {
    
    return (
        <>
            <section className="songs">
                {props.search.map((value, index) => <SearchAlbum key={value.result.id + index} info={value.result}/>)}
            </section>
        </>
    )     
} 

export default Albums;