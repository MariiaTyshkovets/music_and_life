import React from "react";
import ButtonToTop from "../ButtonToTop";
import Footer from "../Footer";
import MyForm from "../MyForm";
import "./About.scss"

const About = () => {

    return (
        <>
        <section className="about">
            <header className="about__header">
                <h2>
                    <span className="black"> M</span>
                    <span className="blue">U</span>
                    <span className="pink">S</span>
                    <span className="red">I</span>
                    <span className="orange">C</span>
                </h2>
                <p>It makes us feel good, sad, happy, uplifted, inspired.<br/> All these emotions fill LIFE with different colors.</p>
            </header>
            <main className="about__main">
                <article className="about__find">
                    <h3>On this site you can find:</h3>
                    <ul>
                        <li>Favorite songs</li>
                        <li>Info about songs, artists and albums</li>
                        <li>Lyrics</li>
                    </ul>
                </article>
                <article className="about__people">
                    <h3>Main ideological inspirer:</h3>
                    <div className="about-me">
                        <div className="about-me__img">
                            <img src={require('../../img/Mariia.jpeg')} alt='Mariia Tyskovets' title="Mariia Tyshkovets"/>
                        </div>
                        <div className="about-me__info">
                            <h3>Mariia Tyshkovets</h3>
                            <ul>
                                <li>I adore music</li>
                                <li>Promising frontender</li>
                                <li>I'm improving skills</li>
                            </ul>
                            <div className="info__icons">
                                <a href="https://www.facebook.com/mariia.tyshkovets" target='_blank' rel="noreferrer" >
                                    <img src={require('../../img/fb.png')} alt='facebook icon'/>
                                </a>
                                <a href="https://github.com/MariiaTyshkovets" target='_blank' rel="noreferrer" >
                                    <img src={require('../../img/github.png')} alt='github icon'/>
                                </a>
                                <a href="https://www.linkedin.com/in/mariia-tyshkovets-8541b6209/" target='_blank' rel="noreferrer" >
                                    <img src={require('../../img/linkedin.png')} alt='linkedin icon'/>
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="contact">
                    <h3>Contact me</h3>
                    <MyForm />
                </article> 
            </main>
            <footer className="btn-container">
                <ButtonToTop/>
            </footer>
        </section>
        <Footer/>
        </>
    )
}

export default About;