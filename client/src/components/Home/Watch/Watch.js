import React ,{useEffect,useContext,useState} from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../../GlobalState';
import axios from 'axios';
import './watch.css'
const Watch = () => {
    const state= useContext(GlobalState)
    const [user] = state.user
    const params = useParams()
    const [movie,setMovie] = useState({})
    console.log(params.id)
    useEffect(()=>{
        const getMovie = async()=>{
            if(params.id){
                try {
                    const res = await axios.get(`/movies/find/${params.id}`,{
                        headers: {
                            token: `Bearer ${user.accessToken}`
                        }
                    })
                    setMovie(res.data)
                } catch (error) {
                    alert(error)
                }
            }
        }
        getMovie()
    },[params.id,user])
    return (
        <div className="watch">
            <div className="watch__back-home">
                <Link to="/" style={{textDecoration:"none",color:"white"}}>
                    <i className="fas fa-long-arrow-alt-left"></i>
                    <span>Trở về trang chủ</span>
                </Link>

            </div>
            <video className="watch__movie" src={movie.video} controls autoPlay />
        </div>
    );
}

export default Watch;
