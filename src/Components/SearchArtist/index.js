import React from "react";
import { useNavigate } from "react-router-dom";

const SearchArtist = (props) => {

    const navigate = useNavigate();

    return (
        <>
            <div className="song__item" onClick={() => navigate(`/music_and_life/search/artist/${props.info.id}`)}>
                <div className="song_img">
                    <img src={props.info.image_url} alt={props.info.name}/>
                </div>
                <div className="song__text">
                    <p>{props.info.name}</p>
                </div>
            </div>
        </>
    )
}

export default SearchArtist;