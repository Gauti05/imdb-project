import { useContext } from "react";
import { watchListContext } from "../../App";

function MovieCard(props){
    const {movieObj} = props;
   
    const watchListContextValue = useContext(watchListContext)
    console.log("context value is",watchListContextValue)
    const {addToWatchList,removeFromWatchList,watchlist} = watchListContextValue;
    let moviePoster = movieObj.backdrop_path
    let movietitle = movieObj.title 


    const moviePosterurl = `url(https://image.tmdb.org/t/p/original/${moviePoster})`
   

    // let isMovieInWatchList = true

    let isMovieInWatchList = watchlist.find((watchlistMovie) => {
        return  watchlistMovie.id == movieObj.id
      })

    //   let isMovieInWatchList = watchlist.find((watchListMovie)=>{
    //     return watchListMovie.id == movieObj.id;
    // })

return <div className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl flex flex-col justify-between items-end hover:scale-110 duration-300 rounded hover:cursor-pointer"
 style={{backgroundImage:moviePosterurl}}>


{

(!isMovieInWatchList) ? <div onClick={()=>addToWatchList(movieObj)}  className="m-4 flex items-center justify-end bg-gray-900/60 rounded" >
&#128525;
</div> 
:
<div onClick={()=>removeFromWatchList(movieObj)} className="m-4 flex items-center justify-end bg-gray-900/60 h-8 w-8 rounded">
    &#10060;
</div>

}
    <div className="text-xl text-white bg-gray-900 bg-opacity-60 text-center w-full">
        {movietitle}

    </div>
</div>
}

export default MovieCard