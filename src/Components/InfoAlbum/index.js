import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Footer from "../Footer";
import './InfoAlbum.scss';
import axios from "axios";
import Loading from "../Loading";
import ButtonToTop from "../ButtonToTop";

const InfoAlbum = () => {

    const [loadingAlbum, setLoadingAlbum] = useState(true);
    const [loadingSongs, setLoadingSongs] = useState(true);
    const [songs, setSongs] = useState(null);
    const [album, setAlbum] = useState(null);
    const params = useParams();
    const navigate = useNavigate();

    const ID = params.id;

    useEffect(() => {
        scrollToTop();

        let albumFromAPI = '';
        const options = {
            method: 'GET',
            url: `https://genius-song-lyrics1.p.rapidapi.com/albums/${ID}`,
            headers: {
              'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
              'X-RapidAPI-Key': 'f4bbc5c731msh43798f50d4907c6p14e374jsn2f36c384a47a'
            }
        };
          
        axios.request(options).then((res) => {
            albumFromAPI = res.data.response.album;
        }).catch(function (error) {
            navigate("/music_and_life/error", {state: {error: error.message}});
        }).finally(() => {
            setAlbum(albumFromAPI);
            setLoadingAlbum(false);
        });
    }, []);

    useEffect(() => {

        let songs = '';

        const options = {
            method: 'GET',
            url: `https://genius-song-lyrics1.p.rapidapi.com/albums/${ID}/appearances`,
            params: {per_page: '20', page: '1'},
            headers: {
              'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
              'X-RapidAPI-Key': 'f4bbc5c731msh43798f50d4907c6p14e374jsn2f36c384a47a'
            }
        };
          
        axios.request(options).then((res) => {
            songs = res.data.response.album_appearances;
        }).catch(function (error) {
            console.error(error);
        }).finally(() => {
            setSongs(songs)
            setLoadingSongs(false);
          });
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <section className="info-album">
                {loadingAlbum === false && loadingSongs === false 
                ? <div>
                    <header className="album__header">
                        <div className="album__img">
                            <img src={album.cover_art_url} alt={album.name} title={album.name}/>
                        </div>
                        <div className="header__info">
                            <h2>{album.name}</h2>
                            <h2><Link to={`/music_and_life/search/artist/${album.artist.id}`}>{album.artist.name}</Link></h2>
                            <p>Release date: {album.release_date}</p>
                        </div>
                        <div className="artist__img">
                            <img src={album.artist.image_url} alt={album.artist.name} title={album.artist.name}/>
                        </div>
                    </header>
                    <main className="album__main">
                        <div className="album__discription">
                            <p>{album.description_preview}</p>
                        </div>
                        <div className="album__songs">
                            {songs.map((item) => <div key={item.track_number} className='album__song-item' onClick={() => navigate(`/music_and_life/search/song/${item.song.id}`)}>
                                <p className="number">{item.track_number}</p>
                                <div>
                                    <img src={item.song.header_image_url} alt={item.song.title} title={item.song.title}/>
                                </div>
                                <div className="song-item__info">
                                    <h3>{item.song.title}</h3>
                                    <p>{item.song.artist_names}</p>
                                </div>
                            </div>)}
                        </div>
                    </main>
                    <footer className="btn-container">
                        <ButtonToTop/> 
                    </footer>
                </div>
                : <Loading/>}
            </section>
            <Footer/>
        </>
    )
}

export default InfoAlbum;