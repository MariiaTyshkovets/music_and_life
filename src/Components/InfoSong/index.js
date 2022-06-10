import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";
import Footer from "../Footer";
import './InfoSong.scss';
import ButtonToTop from "../ButtonToTop";

const InfoSong = () => {

    const [loadingResult, setLoadingResult] = useState(true);
    const [loadingLyric, setLoadingLyric] = useState(true);
    const [result, setResult] = useState(null);
    const [lyrics, setLyrics] = useState('');
    const [text, setText] = useState('');

    const parameters = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        scrollToTop();

        let resultAPI = '';
        const options1 = {
            method: 'GET',
            url: `https://genius-song-lyrics1.p.rapidapi.com/songs/${parameters.id}`,
            params: {text_format: 'dom'},
            headers: {
              'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
            }
        };
          
        axios.request(options1).then(function (res) {   
            resultAPI = res.data.response.song;
        }).catch(function (error) {
            navigate("/music_and_life/error", {state: {error: error.message}});
        }).finally(() => {
            setResult(resultAPI);
            setLoadingResult(false);
        });
    }, [])

    useEffect(() => {
        let lyric = ''
        let textSong = '';
        const options2 = {
            method: 'GET',
            url: `https://genius-song-lyrics1.p.rapidapi.com/songs/${parameters.id}/lyrics`,
            headers: {
              'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
            }
        };

        axios.request(options2).then(function (res) {
            lyric = res.data.response.lyrics.tracking_data;
            textSong = res.data.response.lyrics.lyrics.body.plain.replace(/\n/g, '<br/>') || '';
        }).catch(function (error) {
            navigate("/music_and_life/error", {state: {error: error.message}});
        }).finally(() => {
            setLyrics(lyric);
            setText(textSong);
            setLoadingLyric(false);
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
            <section className="info-song">
                {(loadingResult === false) && (loadingLyric === false) ? 
                <>
                <div className="info">
                    <div className='info__about'>
                        <div className="info__img">
                            <img src={result.header_image_url} alt={lyrics.title} title={result.full_title}/>
                        </div>
                        <div className="info__text">
                            <h3>
                                <Link to={`/music_and_life/search/artist/${result.primary_artist.id}`}>{result.artist_names}</Link>
                            </h3>
                            <p className="description">{result.description_preview || ''}</p>
                            <p>Release date: {result.release_date_for_display}</p>
                            <div className="youtube">
                                <p>Watch music video </p> 
                                <a href={result.youtube_url} target="_blank" rel="noreferrer">
                                    <img className="img-youtube" src={require('../../img/youtube.png')} alt="Youtube icon"/>
                                </a>
                            </div>
                            <p className="info__album">Album: <Link to={`/music_and_life/search/album/${result.album.id}`}>{result.album.name}</Link></p>
                        </div>
                    </div>
                    <div className="info__lyrics">
                        <h3>{result.full_title}</h3>
                        <div className="music">
                            <iframe src={result.apple_music_player_url} style={{border: 0, width: 460, height: 65}} title={lyrics.title}></iframe>
                        </div>
                        <div className="lyrics__text" dangerouslySetInnerHTML={{__html: text.length < 8 ? 'Unfortunately the lyrics of this song are not available on the site.' : text}}/>
                    </div>
                </div>
                <div className="btn-container">
                    <ButtonToTop/> 
                </div>
                </>
                : 
                <Loading/>}
            </section>
            <Footer/>
        </>
    )
}

export default InfoSong;