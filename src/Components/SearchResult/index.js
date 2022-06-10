import React, { useState, useEffect } from "react";
import "./SearchResult.scss";
import Footer from "../Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Songs from "../Songs";
import Artists from "../Artists";
import Albums from "../Albums";
import axios from "axios";
import Loading from "../Loading";
import ButtonToTop from "../ButtonToTop";

const SearchResult = () => {

    const parametrs = useLocation();
    let text = parametrs.state === null ? '' : parametrs.state.searchText;

    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState(text);
    const [searchResultSongs, setSearchResultSongs] = useState('');
    const [searchResultArtists, setSearchResultArtists] = useState('');
    const [searchResultAlbums, setSearchResultAlbums] = useState('');
    const [pageSongs, setPageSongs] = useState(1);
    const [pageAlbums, setPageAlbums] = useState(1);
    const [pageArtists, setPageArtists] = useState(1);

    const navigate = useNavigate();
    
    useEffect( () => {
        searchInAPI();
    }, []) 

    useEffect(() => {
        let resultSong = '';

        config.params.page = 1 + pageSongs;
          
        axios.request(config).then((res) => {
            resultSong = res.data.response.sections[1].hits;
        }).catch((error) => {
            navigate("/music_and_life/error", {state: {error: error.message}});
        }).finally(() => {
            setSearchResultSongs((prevState) => prevState.concat(resultSong));
        })
    }, [pageSongs]) 

    useEffect(() => {
        let resultArtists = '';

        config.params.page = 1 + pageArtists;
          
        axios.request(config).then((res) => {
            resultArtists = res.data.response.sections[3].hits;
        }).catch((error) => {
            navigate("/music_and_life/error", {state: {error: error.message}});
        }).finally(() => {
            setSearchResultArtists((prevState) => prevState.concat(resultArtists));
        })
    }, [pageArtists])

    useEffect(() => {
        let resultAlbums = '';

        config.params.page = 1 + pageAlbums;
          
        axios.request(config).then((res) => {
            resultAlbums = res.data.response.sections[4].hits;
        }).catch((error) => {
            navigate("/music_and_life/error", {state: {error: error.message}});
        }).finally(() => {
            setSearchResultAlbums((prevState) => prevState.concat(resultAlbums));
        })
    }, [pageAlbums])

    const config = {
        method: 'GET',
        url: 'https://genius-song-lyrics1.p.rapidapi.com/search/multi',
        params: {q: searchText, per_page: '5', page: '1'},
        headers: {
          'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
        }
    };

    const searchInAPI = () => {
        let result = '';

        config.params.page = '1';
          
        axios.request(config).then((res) => {
            result = res.data.response.sections;
        }).catch((error) => {
            navigate("/music_and_life/error", {state: {error: error.message}});
        }).finally(() => {
            setPageSongs(1);
            setPageArtists(1);
            setPageAlbums(1);
            setSearchResultSongs(result[1].hits);
            setSearchResultArtists(result[3].hits);
            setSearchResultAlbums(result[4].hits);
            setLoading(false);
        })
    }

    const inputChange = (e) => {
        setSearchText(e.target.value)
    }

    const addSongs = () => {
        setPageSongs((prevState) => prevState + 1);
    }

    const addArtists = () => {
        setPageArtists((prevState) => prevState + 1);
    }

    const addAlbums = () => {
        setPageAlbums((prevState) => prevState + 1);
    }

    return (
        <>
            <section className="search-result">
                <div className="search">
                <div className="search__form">
                    <input type='text' placeholder="Start your search" 
                        onChange={inputChange} value={searchText}
                        onKeyPress={(event) => {
                            if (event.key === "Enter" && searchText.length > 0) {
                                setLoading(true);
                                searchInAPI();
                            }
                        }}
                        required/>
                    <button className="search__btn" type='button'
                        disabled={searchText.length < 1} 
                        onClick={() => { setLoading(true); searchInAPI()}}>
                        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px">
                            <path d="M 21 3 C 11.622998 3 4 10.623005 4 20 C 4 29.376995 11.622998 37 21 37 C 24.712383 37 28.139151 35.791079 30.9375 33.765625 L 44.085938 46.914062 L 46.914062 44.085938 L 33.886719 31.058594 C 36.443536 28.083 38 24.223631 38 20 C 38 10.623005 30.377002 3 21 3 z M 21 5 C 29.296122 5 36 11.703883 36 20 C 36 28.296117 29.296122 35 21 35 C 12.703878 35 6 28.296117 6 20 C 6 11.703883 12.703878 5 21 5 z"/>
                        </svg>
                    </button>
                </div>
                </div>
                <Tabs>
                    <TabList className='tab-list'>
                        <Tab className='tab-list__item'>Songs</Tab>
                        <Tab className='tab-list__item'>Artists</Tab>
                        <Tab className='tab-list__item'>Albums</Tab>
                    </TabList>

                    <TabPanel>
                        {loading ? <Loading/> 
                        : <>
                            <Songs search={searchResultSongs}/>
                            <div className={searchResultSongs.length === 0 ? 'btn-container none' : 'btn-container'}>
                                <button type="button" className='btn' onClick={addSongs}>See More Songs</button>
                            </div>
                        </>}
                    </TabPanel>
                    <TabPanel>
                        {!loading ? 
                        <>
                            <Artists search={searchResultArtists}/> 
                            <div className={searchResultArtists.length === 0 ? 'btn-container none' : 'btn-container'}>
                                <button type="button" className='btn' onClick={addArtists}>See More Artists</button>
                            </div>
                        </>
                        : <Loading/>} 
                    </TabPanel>
                    <TabPanel>
                        {!loading ? 
                        <>
                            <Albums search={searchResultAlbums}/>
                            <div className={searchResultAlbums.length === 0 ? 'btn-container none' : 'btn-container'}>
                                <button type="button" className='btn' onClick={addAlbums}>See More Albums</button>
                            </div>
                        </> 
                        : <Loading/>}
                    </TabPanel>
                </Tabs>
                {searchResultSongs.length > 1 ? 
                <div className="btn-container">
                    <ButtonToTop/>
                </div>
                : undefined}
            </section>
            <Footer />
        </>
    )     
} 

export default SearchResult;