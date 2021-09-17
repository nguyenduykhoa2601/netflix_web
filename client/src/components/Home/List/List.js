import React, { useRef, useState } from 'react';
import Movie from '../../utils/Movie/Movie';
import './list.css';


const List = ({list}) => {
    const [slideMovie,setSlideMovie] = useState(0)
    const [isMoved,setIsMoved] = useState(false)
    const listRef = useRef()

    const handleClick = (direction)=>{
        setIsMoved(true)
        let distance = listRef.current.getBoundingClientRect().x - 50
        if (direction==="left" && slideMovie >0){
            setSlideMovie(slideMovie-1)
            listRef.current.style.transform = `translateX(${260+ distance}px)`
        }
        if (direction==="right" && slideMovie < list.content.length-5){
            setSlideMovie(slideMovie+1)
            listRef.current.style.transform = `translateX(${-260+ distance}px)`
        }
    }
    return (
        <div className="list__movie">
            <h1 className="list__movie-heading">{list.title}</h1>
            <div className="slider__list">
                <i className="slider__control left fas fa-chevron-left" style={{display: !isMoved && "none"}} onClick={()=>handleClick("left")}></i>
                <i className="slider__control right fas fa-chevron-right"  onClick={()=>handleClick("right")}></i>
                <div className="list__container" ref={listRef}>
                    {
                        list.content.map((movie,index)=>{
                            return(
                                <Movie key={index} index={index} movie={movie}/>
                            )
                        })
                    }

                   

                </div>

            </div>

        </div>
    );
}

export default List;
