import React from "react";
import { useNavigate } from "react-router-dom";

const SearchAlbum = (props) => {

    const navigate = useNavigate();

    return (
        <>
            <div className="song__item"  onClick={() => navigate(`/music_and_life/search/album/${props.info.id}`)}>
                <div className="song_img">
                    <img src={props.info.cover_art_thumbnail_url} alt={props.info.name}/>
                </div>
                <div className="song__text">
                    <p>Album: {props.info.name}</p>
                    <span>{props.info.artist.name}</span>
                </div>
            </div>
        </>
    )
}

export default SearchAlbum;