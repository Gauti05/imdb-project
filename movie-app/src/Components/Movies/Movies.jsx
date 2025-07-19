import { useState,useEffect } from "react"
import Spinner from "../Common/Spinner/Spinner"
import axios from "axios"
import MovieCard from "../MovieCard/MovieCard"
import Pagination from "../Pagination/Pagination"
import { useDispatch, useSelector } from "react-redux"
import { fetchMovies, previousPage, nextPage } from "../../redux/Slice/movieSlice"

function Movies(props){
    // const[movies,setMovies] = useState([])
    // const [loading, setLoading] = useState(true)
    // // const {addToWatchList,removeFromWatchList,watchlist} = props

    
    // const [pageNumber,setPageNumber] = useState(1)

    const{movies,loading,pageNumber} = useSelector((state)=>state.moviesState)
    const dispatch = useDispatch()

//components did mount {after 1 intital render} + components did update{everytime page no state is update}
//     useEffect( ()=> {
//         async function fetchData (){
//             setLoading(true)
//             const res =  await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=1439d8ee0449071c8283dae52000692e&page=${pageNumber}`)
      
//             let movies = res.data.results
//             setMovies(movies)
//             setLoading(false)
       
//         }

// fetchData()
//     }, [pageNumber])
useEffect(()=>{
dispatch(fetchMovies(pageNumber))
},[dispatch,pageNumber])

    const previouspageFn = () => {
        if (pageNumber > 1) {
            dispatch(previousPage()); // Dispatch the previousPage action
        }
    };

    const nextpagefn = () => {
        dispatch(nextPage()); // Dispatch the nextPage action
    };


  

    if(loading){
        return <Spinner/>
    }
return <div>
   <div className="text-2xl font-bold m-5">
    <h1>Trending Movies</h1>
    <div className="flex flex-wrap gap-8 justify-evenly align-center mt-5">
        {
            movies.map((movieObj) =>{
                return <MovieCard  movieObj={movieObj}/>
            })
        }
    </div>
   </div>
   <Pagination pageNumber={pageNumber} previouspageFn={previouspageFn} nextpagefn={nextpagefn}/>
</div>
}  

export default Movies





