import React from 'react';

const movieCard = ({movie})=>{

    return(

<div className="card" key={movie.id}>
                        <img className="card--image" 
                        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path} `}
                        alt={movie.title + 'poster'}
                        />
                        <div className="card--content">
                            <h3 className="card--title">{movie.title}</h3>
                            <p><small>Relesae Date: {movie.release_date}</small></p>
                            <p><small>Rating: {movie.vote_average}</small></p>
                            <p className="card-desc">{movie.overview}</p>
                        </div>
                    </div>

    )

}
export default movieCard;