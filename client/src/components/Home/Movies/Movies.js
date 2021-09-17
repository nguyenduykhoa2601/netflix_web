import { Grid } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './movies.css';

const Movies = ({ movies }) => {

    return (
        <div className="movies">
            <Grid container>
                {
                    movies.map((movie, index) => {
                        return (
                            <div className="movies__movie" key={index}>
                                <Grid item sm={12}>
                                    <Link to={`/watch/${movie._id}`} className="movies__movie-link">
                                        <img src={movie.img} className="movies__movie-img" alt={movie.title} />
                                        <div className="movies__movie-title">{movie.title}</div>
                                    </Link>
                                </Grid>
                            </div>
                        )
                    })
                }
            </Grid>
        </div>
    );
}

export default Movies;
