import React from "react";
import "./Home.scss";
import Search from "../Search";

const Home = (props) => {
    
    return (
        <>
            <article className="home">
                <div className="heading">
                    <h2>Find your 
                        <span className="black"> M</span>
                        <span className="blue">U</span>
                        <span className="pink">S</span>
                        <span className="red">I</span>
                        <span className="orange">C</span>
                    </h2>
                </div>
                <Search/>
            </article>
        </>
    )     
} 

export default Home;