

import React, { useContext, useState } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../GlobalState';
import Header from './Header/Header';
import './homepage.css';
import List from './List/List';
import Movies from './Movies/Movies';
const HomePage = () => {
    const state = useContext(GlobalState)
    const [movieTitle] = state.moviesAPI.movieTitle
    const [movies] = state.moviesAPI.movies
    const [search] = state.moviesAPI.search
    const [lists] = state.listsAPI.lists
    const [sound, setSound] = useState(true)
    return (
        <div className="home__page" >
            <Header />
            {
                !search ?
                    <>
                        <div className="header__trailer">
                            <ReactPlayer
                                className="react-player"
                                url={movieTitle.trailer}
                                width='100%'
                                height='40%'
                                playing={true}
                                muted={sound}
                                loop
                            />


                        </div>
                        <div className="detail__trailer">
                            <div className="trailer__title">
                                {movieTitle.title}
                            </div>
                            <div className="trailer__desc">
                                {movieTitle.desc}
                            </div>
                            <div className="trailer__action" >
                                <button className="trailer__watch">
                                    <Link to={`/watch/${movieTitle._id}`} className="trailer__watch-link">
                                        <i className="fas fa-play"></i>
                                        <span>Phát</span>
                                    </Link>

                                </button>
                                <button className="trailer__info">
                                    <Link to={`/detailMovie/${movieTitle._id}`} className="trailer__info-link">
                                        <i className="fas fa-exclamation"></i>
                                        <span>Thông tin khác</span>
                                    </Link>

                                </button>
                            </div>
                        </div>
                        <div className="label">
                            <i className={sound === false ? 'fas fa-volume-up' : 'fas fa-volume-mute'}
                                onClick={() => setSound(!sound)}>
                            </i>
                            <span>{movieTitle.limit}+</span>
                        </div>
                        {
                            lists.map((list, index) => {
                                return (
                                    <List key={index} list={list} />
                                )
                            })
                        }

                    </>
                    :
                    <Movies movies={movies} />
            }



        </div>
    );
}

export default HomePage;
