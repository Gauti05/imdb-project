import { Link } from "react-router-dom"
// import Logo from "../assets/MovieLogo.png"
import Logo from "../../assets/MovieLogo.png"
function NavBar(){
return <div className="flex space-x-7 items-center py-4 pl-3">
  <Link to="/">
  <img className="w-[50px]" src={Logo}/>
  </Link>
  <Link className="text-blue-500 text-3xl font-bold" to="/">
  Movies
  </Link>
  <Link className="text-blue-500 text-3xl font-bold" to="/watchlist">
  WatchList
  </Link>
</div>
}

export default NavBar