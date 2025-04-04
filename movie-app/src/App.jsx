import React, { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
// import WatchList from './Pages/watchlistpage/WatchList'
import WatchList from './Pages/watchlistpage/WatchList'
import NavBar from './Components/NavBar/NavBar'
import Counter from './Pages/Counter/Counter'
import {Provider} from "react-redux"
import { store } from './redux/Store/store'
import TodoList from './Pages/TodoList/TodoList'
// import TodoList from './Pages/TodoList/TodoList'
export  const watchListContext = React.createContext()

function App() {
  // const [count, setCount] = useState(0)

  // addToWatchList
 

  const [watchlist,setWatchList] = useState(getWatchListFromStorage())
useEffect(() =>{
localStorage.setItem("watchlist", JSON.stringify(watchlist))
}, [watchlist])

  console.log("inside watchlist comp", watchlist)

  const addToWatchList = (movieObj)=>{
    console.log("movie is added", movieObj)
setWatchList([...watchlist,movieObj])
  }

  const removeFromWatchList = (movieObj) => {
    console.log("remove func called")

    const filteredmovie = watchlist.filter((watchlistMovie) =>{
      return movieObj.id!==watchlistMovie.id
      // setWatchList(filteredmovie)
    
    })
    setWatchList(filteredmovie)
  }

  function getWatchListFromStorage (){
    const watchlistFromStorage = JSON.parse(localStorage.getItem("watchlist")) ;
if(watchlistFromStorage==null){
  return []
}
return watchlistFromStorage
  }

  return (
    <div>
      <Provider store={store}>
      <watchListContext.Provider value={{watchlist,addToWatchList,removeFromWatchList}}>
   <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/'   element={<Home />}/>
 
 <Route path='/watchlist' element={<WatchList/>}/>
 <Route path='/counter' element={<Counter/>}/>
 <Route path='/todolist' element={<TodoList/>}/>
   </Routes>
   </BrowserRouter>
   </watchListContext.Provider>
   </Provider>
    </div>
  )
}

export default App;
