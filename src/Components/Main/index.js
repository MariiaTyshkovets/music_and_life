import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Home";
import SearchResult from "../SearchResult";
import InfoSong from "../InfoSong";
import './Main.scss';
import InfoArtist from "../InfoArtist";
import InfoAlbum from "../InfoAlbum";
import AxiosError from "../AxiosError";

const Main = () => {

    return (
        <>
            <main className="main" id="page-wrap">
                <Routes>
                    <Route path="/music_and_life" element={<Home/>}/>
                    <Route path="/music_and_life/error" element={<AxiosError />}/>
                    <Route path="/music_and_life/search" element={<SearchResult />}/>
                    <Route path="/music_and_life/search/song/:id" element={<InfoSong />}/>
                    <Route path="/music_and_life/search/artist/:id" element={<InfoArtist />}/>
                    <Route path="/music_and_life/search/album/:id" element={<InfoAlbum />}/>
                </Routes>
            </main>
        </>
    ) 
}

export default Main;