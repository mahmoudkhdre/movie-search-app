import React,{useState} from 'react';
import MovieCard from './movie-card'
const SearchMovies = () => {
    const [query, setquery] = useState('');
    const [movies, setMovies]=useState([]);
    const searchMovies = async (e)=> {
        e.preventDefault();
           
                // const query = " angery men"
            const url =`https://api.themoviedb.org/3/search/movie?api_key=94460311bda76974573ae4b487c2b4cb&language=en-US&query=${query}&include_adult=false`
 
 try{const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results)

     console.log(data);
}
catch(err){
       console.error(err);
      
    }
            
    }
    return(
        <>
        <form className="form" onSubmit={searchMovies}>
            <label className="label"htmlFor="query" > Movie Name </label>
            <input 
            className="input" 
            type="text"
            name="query"
             placeholder="angery men" 
             value={ query}
             onChange={(e) => setquery(e.target.value)}
             />
            <button className="button" type="submit"> Search </button>
        </form>
        <div className="card-list">
            {movies.filter(movie => movie.poster_path).map(movie => (
                    <MovieCard  movie={movie}/>
            )
            )}
        </div>
        </>
    )
}

export default SearchMovies;