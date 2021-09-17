import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './movie.css';

const Movie = ({ index, movie }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [sound, setSound] = useState(false)
    
    return (

        <div
            className="listItem"
            style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={movie.img}
                alt=""
            />

            {isHovered && (
                <>
                    <video src={movie.trailer} autoPlay={true} loop muted={sound} />
                    <div className="itemInfo">
                        <div className="icons">
                            <Link to={`/watch/${movie._id}`} className="icon-link">
                                <i className=" icon fas fa-play"></i>
                            </Link>

                            <i
                                className={sound === false ? "icon fas fa-volume-up" : "icon fas fa-volume-mute"}
                                onClick={() => setSound(!sound)}
                            ></i>
                            <Link to={`/detailMovie/${movie._id}`} className="icon-link">
                                <i
                                    className="icon icon-detail fas fa-chevron-down"
                                ></i>
                            </Link>


                        </div>
                        <div className="itemInfoTop">
                            <span>{movie.duration}</span>
                            <span className="limit">+{movie.limit}</span>
                            <span>{movie.year}</span>
                        </div>
                        <div className="desc">
                            {movie.desc}
                        </div>
                        <div className="genre">{movie.genre}</div>
                    </div>

                </>
            )
            }

        </div>
    );
}

export default Movie;
