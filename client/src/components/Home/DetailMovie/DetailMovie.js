import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import './detailMovie.css';
const DetailMovie = () => {
    const state = useContext(GlobalState)
    const [user] = state.user
    const params = useParams()
    const [movie, setMovie] = useState()
    useEffect(() => {
        const getMovie = async () => {
            if (params.id) {
                try {
                    const res = await axios.get(`/movies/find/${params.id}`, {
                        headers: {
                            token: `Bearer ${user.accessToken}`
                        }
                    })
                    await setMovie(res.data)
                } catch (error) {
                    alert(error)
                }
            }
        }
        getMovie()
    }, [params.id,user])
    return (

        <div className="detail__movie">
            {
                movie ?
                    <>
                        <Link to="/">
                            <img className="detail__movie-logo" src="https://analyticsindiamag.com/wp-content/uploads/2020/03/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png" alt="" />
                        </Link>

                        <div className="detail__movie-heading">Thông tin phim</div>
                        <div className="detail__movie-body">
                            <div className="movie__action">
                                <img className="movie__poster"
                                    src={movie.imgTitle}
                                    alt=""
                                />
                                <Link to={`/watch/${movie._id}`} className="movie__watch-now-link" >
                                    <div className="movie__watch-now">Xem ngay</div>
                                </Link>

                            </div>
                            <div className="movie__info">
                                <div className="movie__info-title">{movie.title}</div>
                                <div className="movie__info-more">
                                    <span className="movie__info-year">Năm sản xuất : {movie.year}</span>
                                    <span className="movie__info-limit">Độ tuổi: {movie.limit}+</span>
                                </div>
                                <div className="movie__info-desc">
                                    {movie.desc}
                                </div>
                                <div className="movie__info-type">Thể loại: {movie.genre}</div>
                            </div>
                        </div>

                    </>:''
            }

        </div>


    );
}

export default DetailMovie;
