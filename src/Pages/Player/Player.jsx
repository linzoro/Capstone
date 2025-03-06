import React, {useEffect, useState} from 'react'
import './Player.css'
import back_arrow from '../../assets/back_arrow.png'
import { useNavigate, useParams } from 'react-router-dom'   

const Player = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [apiData, setApiData]=useState({
        name: "",
        key:"",
        published_at:"",
        type:""
    })

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTY1Zjc4ZTQxZDUzMTI1ZjBlYzNjOWRjNjgyZjMzYiIsIm5iZiI6MTc0MDYzMzc0NS4yNzAwMDAyLCJzdWIiOiI2N2JmZjY5MTMxYWE1NWE3MTEzNTliNDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.LbJS1vjZ6yQAkbsO5jnMrXuqwUvOBImMsMVGzphWZJQ'

            //Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjFkZjRiNjFiOGI3ZjM5MmQ2Y2RiMjI5MjExMGNiMCIsIm5iZiI6MTc0MDYzMzc0NS4yNzAwMDAyLCJzdWIiOiI2N2JmZjY5MTMxYWE1NWE3MTEzNTliNDciLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.KSvtt_1OTP0sg6E6kHg378Xoa6Z2wIZfhFbHXTj_ga4'
        }
    };

    useEffect(()=>{
    //let url = "https://api.themoviedb.org/3/movie/756/videos?"
    let url = "https://api.themoviedb.org/3/movie/"+ id +"/videos?"
    let params = new URLSearchParams({
        language: "en-US"
    })
    url += params.toString();



        fetch(url, options)
        .then(Response => Response.json())
        .then(Response => 
            {
                console.log(Response.results[0])
                setApiData(Response.results[0])

            })
        //.then(json => console.log(json))
        .catch(err => console.error(err));

    },[id])

    return (
        <div className='player'>
            <img src={back_arrow} alt="" onClick={()=>{navigate(-2)}}/>
            <iframe width='90%' height='90%'
                src={'https://www.youtube.com/embed/' + apiData.key}
                title='trailer'
                allowFullScreen> </iframe>

            <div className="player-info">
                <p>{apiData.published_at.slice(0,10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.type}</p>

            </div>

        </div>
    )
}

export default Player