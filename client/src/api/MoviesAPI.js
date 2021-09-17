import axios from 'axios';
import { useState,useEffect } from 'react';

const MoviesAPI = (token) => {
    const [movieTitle,setMovieTitle] = useState([])
    const [movies,setMovies] = useState([])
    const [search,setSearch] = useState('')
    useEffect(()=>{
        if (token){
            const getMovieTitle = async()=>{
                try {
                    const res = await axios.get('/movies/random',{
                        headers: {token : `Bearer ${token}`}
                    })
                    setMovieTitle(res.data[0])
                } catch (error) {
                    alert(error)
                }
            } 
            const getMovies = async()=>{
                try {
                    const res = await axios.get('/movies',{
                        headers: {token : `Bearer ${token}`}
                    })
                    if(search){
                        const listMovie= res.data.filter((movie)=>{
                            return movie.title.toLowerCase().indexOf(search) !==-1
                        })
                        setMovies(listMovie)
                    }
                    else{
                        setMovies(res.data)
                    }
                   
                } catch (error) {
                    alert(error)
                }
            }
            getMovies()
            getMovieTitle()
        }
        
    },[token,search])
    return {
        movieTitle:  [movieTitle,setMovieTitle],
        movies: [movies,setMovies],
        search: [search,setSearch]
    }
    
}

export default MoviesAPI;
