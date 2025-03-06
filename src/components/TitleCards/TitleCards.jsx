import React, { useEffect, useRef,useState } from 'react'
import './TitleCards.css'
//import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'

const TitleCards = ({ title, category }) => {
    const [apiData, setApiData] = useState([]);

    const cardsRef = useRef();

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTY1Zjc4ZTQxZDUzMTI1ZjBlYzNjOWRjNjgyZjMzYiIsIm5iZiI6MTc0MDYzMzc0NS4yNzAwMDAyLCJzdWIiOiI2N2JmZjY5MTMxYWE1NWE3MTEzNTliNDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LbJS1vjZ6yQAkbsO5jnMrXuqwUvOBImMsMVGzphWZJQ'

            //Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjFkZjRiNjFiOGI3ZjM5MmQ2Y2RiMjI5MjExMGNiMCIsIm5iZiI6MTc0MDYzMzc0NS4yNzAwMDAyLCJzdWIiOiI2N2JmZjY5MTMxYWE1NWE3MTEzNTliNDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KSvtt_1OTP0sg6E6kHg378Xoa6Z2wIZfhFbHXTj_ga4'
        }
    };

    

    const handleWheel = (event) => {

        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(() => {
        let url = "https://api.themoviedb.org/3/movie/"
        //url += category 
        url += category? category : "now_playing"
        url += "?language=en-US&page=1"
    //not taking fetch ??
        fetch(url, options)
        .then(res => res.json())
        .then(res => setApiData (res.results))
        .catch(err => console.error(err));
        cardsRef.current.addEventListener('wheel', handleWheel);
    }, [])

    return (
        <div className='titlecards'>
            <h2>{title?title:"Popular on Crimehouse"}</h2>
            <div className="card-list" ref={cardsRef}>
                {apiData.map((card, index) => {
                    return <Link to={'/player/'+card.id} className="card" key={index}>
                        <img src={'https://image.tmdb.org/t/p/w500'+card.backdrop_path} alt="" />
                        <p>{card.original_title}</p>
                    </Link>

                })}


            </div>
        </div>
    )
}

export default TitleCards