import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../Loading";
import Footer from "../Footer";
import './InfoArtist.scss';
import Slider from "react-slick";
import ButtonToTop from "../ButtonToTop";

const InfoArtist = () => {    

    const [loadingResult, setLoadingResult] = useState(true);
    const [loadingAlbums, setLoadingAlbums] = useState(true);
    const [albums, setAlbums] = useState(null);
    const [result, setResult] = useState(null);

    const parameters = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        scrollToTop();

        let resultAPI = '';
        const options1 = {
            method: 'GET',
            url: `https://genius-song-lyrics1.p.rapidapi.com/artists/${parameters.id}`,
            params: {text_format: 'html'},
            headers: {
              'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
              'X-RapidAPI-Key': 'f4bbc5c731msh43798f50d4907c6p14e374jsn2f36c384a47a'
            }
        };
          
        axios.request(options1).then(function (res) {   
            resultAPI = res.data.response.artist;
        }).catch(function (error) {
            navigate("/music_and_life/error", {state: {error: error.message}});
        }).finally(() => {
            setResult(resultAPI);
            setLoadingResult(false);
        });
    }, [])

    useEffect(() => {
        let album = '';

        const options2 = {
            method: 'GET',
            url: `https://genius-song-lyrics1.p.rapidapi.com/artists/${parameters.id}/albums`,
            params: {per_page: '12', page: '1'},
            headers: {
              'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
              'X-RapidAPI-Key': 'f4bbc5c731msh43798f50d4907c6p14e374jsn2f36c384a47a'
            }
        };

        axios.request(options2).then(function (res) {
            album = res.data.response;
        }).catch(function (error) {
            navigate("/music_and_life/error", {state: {error: error.message}});
        }).finally(() => {
            setAlbums(album);
            setLoadingAlbums(false);
        });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <section className="info-artist">
                {(loadingResult === false) && (loadingAlbums === false) ? 
                <>
                <header className="artist__header" 
                style={{ 
                    background: `url(${result.header_image_url}) center`, 
                    backgroundSize: '100% auto',
                    backgroundRepeat: 'no-repeat' 
                }}>
                </header>
                <main>
                    <div className="artist__description" dangerouslySetInnerHTML={{__html: result.description.html.length > 8 ? result.description.html : ''}}/>
                    {albums.albums.length < 1 ? 
                    <div style={{ textAlign: 'center', fontSize: '20px', padding: '20px'}}>
                        Unfortunately, there is no information about the artist and his albums at the moment. Go to <Link to='/music_and_life/' style={{ fontWeight: '600' }}>HOME</Link> page.
                    </div>
                    :<article className="artist__albums">
                        <h3>Albums</h3>
                        <Slider {...settings}>
                            {albums.albums.map((album) => (<div className='album__item' key={album.full_title}>
                                <Link to={`/music_and_life/search/album/${album.id}`}>
                                    <img src={album.cover_art_url} alt={album.full_title} title={album.full_title}/>
                                    <p style={{ textAlign: 'center' }}>{album.name}</p>
                                </Link>
                            </div>))}
                        </Slider>
                    </article>}
                </main>
                <footer className="btn-container">
                   <ButtonToTop/> 
                </footer>
                </>
                : 
                <Loading/>}
            </section>
            <Footer/>
        </>
    )
}

export default InfoArtist;