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

const SearchResult = () => {

    const parametrs = useLocation();
    let text = parametrs.state === null ? '' : parametrs.state.searchText;

    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState(text);
    const [searchResult, setSearchResult] = useState('');

    const navigate = useNavigate();
    const URL = 'https://genius-song-lyrics1.p.rapidapi.com';
    const search = '/search/multi';
    
    useEffect( () => {
        searchInAPI();
    }, []) 

    const searchInAPI = () => {
        let result = '';
    
        const config = {
            method: 'GET',
            url: URL + search,
            params: {q: searchText, per_page: '5', page: '1'},
            headers: {
              'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
              'X-RapidAPI-Key': 'f4bbc5c731msh43798f50d4907c6p14e374jsn2f36c384a47a'
            }
        };
          
        axios.request(config).then((res) => {
            result = res.data.response.sections;
        }).catch((error) => {
            console.log(error.message);
            navigate("/music_and_life/error", {state: {error: error.message}});
        }).finally(() => {
            setSearchResult(result);
            setLoading(false);
        })
    }

    const inputChange = (e) => {
        setSearchText(e.target.value)
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
                        {loading ? <Loading/> : <Songs search={searchResult[1].hits}/>}
                    </TabPanel>
                    <TabPanel>
                        {!loading ? <Artists search={searchResult[3].hits}/> : <Loading/>} 
                    </TabPanel>
                    <TabPanel>
                        {!loading ? <Albums search={searchResult[4].hits}/> : <Loading/>}
                    </TabPanel>
                </Tabs>
            </section>
            <Footer />
        </>
    )     
} 

export default SearchResult;