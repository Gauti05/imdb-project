import { useEffect, useState } from "react"
import genreIdMappings from "../../Configurations/genereConfig";
import { watchListContext } from "../../App";
import { useContext } from "react";

function WatchList(props){
    const watchListContextValue = useContext(watchListContext);
    const{watchlist, removeFromWatchList} = watchListContextValue;
    const genreSet = new Set();
    console.log(watchlist);

    const [movies,setMovies] = useState(watchlist)
    const [searchValue,setSearchValue] = useState("")
    useEffect(() =>{
        setMovies(watchlist)
    },[watchlist])
movies.forEach((movie) =>{
    const genreIds = movie.genre_ids 

    genreIds.forEach((id) =>{
        genreSet.add(genreIdMappings[id])
    })
   
})
console.log("genreid", genreSet)
const genres = Array.from(genreSet)
genres.unshift("All Genres")
console.log(genres)

const onSearchInputChange = (e)=>{
    // console.log(e.target)
    const searchFieldValue = e.target.value
    setSearchValue(searchFieldValue)

    const filteredMovies = watchlist.filter((movie) =>{
        return movie.title.toLowerCase().startsWith(searchFieldValue.toLowerCase())
    })
    setMovies(filteredMovies)
}



    // console.log(movies)

return <div>

    <div className="flex justify-center m-4">
        {
            genres.map((genre) => {
           return <div className="mx-4 bg-blue-400 h-[3rem] w-[9rem] flex justify-center items-center rounded-xl text-white font-bolder">{genre}</div>
            })
        }
    </div>
 
 <div className="my-10">
<input onChange={onSearchInputChange} value={searchValue} type="text"  placeholder="Search Movies" className="h-[3rem] w-[20rem] border divide-gray-800 px-4"/>


 </div>

 <div>
    <table className="my-10 w-full">
        <thead>
        <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Popularity</th>
            <th>genre</th>
        </tr>
        </thead>

        <tbody className="my-20">
            {
                movies.map((movie) =>{
                return   <tr className="my-20">
                    <td className="flex items-center">
                   
                    <img  className = "h-[10rem] w-[10rem] object-fit" src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} />
                   <div className="px-10 font-medium"> {movie.title}</div>
                    </td>
                    
                    <td>
                        {movie.vote_average}
                    </td>
                    <td>
                        {movie.popularity}
                    </td>
                    <td>
                        {genreIdMappings[movie.genre_ids[0]]}
                    </td>
                    <td onClick={()=>removeFromWatchList(movie)} className="text-red-500">
                        Delete
                    </td>
                   </tr>
                })
            }
        </tbody>
        
    </table>
 </div>



</div>

}

export default WatchList