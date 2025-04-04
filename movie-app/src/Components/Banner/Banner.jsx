import axios from "axios"
import { useState,useEffect } from "react"

function Banner(){
    useEffect( ()=> {
        async function fetchData (){
            const res =  await axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=1439d8ee0449071c8283dae52000692e")
      const requiredMovieObject = getRandomInt(0,19)
            let movie = res.data.results[requiredMovieObject]
       let moviePoster = movie.backdrop_path
       let movietitle = movie.title 
       setBannerimage(`https://image.tmdb.org/t/p/original/${moviePoster}`)
       setMovieTitle(movietitle)
        }

fetchData()
    }, [])
    const [bannerimage,setBannerimage] = useState("https:upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/991px-Placeholder_view_vector.svg.png")
    const [movieTitle,setMovieTitle] = useState("")
    return <div className="h-[80vh] bg-cover bg-center flex items-end justify-center" style={{backgroundImage:`url(${bannerimage})`}}>
       
       <div className="text-white text-2xl">
       {movieTitle}
       </div>
     

    </div>
}


function getRandomInt(min, max) {
    //Will return a number inside the given range, inclusive of both minimum and maximum
    //i.e. if min=0, max=20, returns a number from 0-20
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

export default Banner