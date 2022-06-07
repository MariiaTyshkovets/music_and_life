import React from "react";
import SearchAlbum from "../SearchAlbum";

const Albums = (props) => {
    
    return (
        <>
            <section className="songs">
                {props.search.map((value) => <SearchAlbum key={value.result.id} info={value.result}/>)}
                <button type="button" className={props.search.length === 0 ? 'btn none' : 'btn'}>See More Albums</button>
            </section>
        </>
    )     
} 

export default Albums;