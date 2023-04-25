import React from 'react'
import { Link, useParams } from 'react-router-dom'
import YouTube from 'react-youtube';



const Movietrailer = ({movies}) => {
    const {id} = useParams();
    const idMovie = Number(id)
    const movie = movies.find(el => el.id === idMovie);
    return (
        <div className='des'>
            <Link to='/'>
                <button>HOME</button>
            </Link>
            <h1>{movie.title}</h1>
            <br/>
            <img src={movie.posterUrl} alt='515515151515' style={{width:300}} />
            <br />
            <YouTube videoId={movie.trailer} />
        </div>
        )
}

export default Movietrailer