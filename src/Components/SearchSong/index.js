import React from "react";
import { useNavigate } from "react-router-dom";

const SearchSong = (props) => {
    const navigate = useNavigate();

    return (
        <>
            <div className="song__item" onClick={() => navigate(`/music_and_life/search/song/${props.info.id}`)}>
                <div className="song_img">
                    <img src={props.info.header_image_url} alt={props.info.title}/>
                </div>
                <div className="song__text">
                    <p>{props.info.title}</p>
                    <span>{props.info.primary_artist.name}</span>
                </div>
            </div>
        </>
    )
}

export default SearchSong;