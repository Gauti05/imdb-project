import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../Slice/counterSlice";
import todoReducer from "../Slice/todoSlice"
import moviesReducer from "../Slice/movieSlice"


export const store = configureStore({
    reducer:{
        count:counterReducer,
        todoState:todoReducer,
        moviesState:moviesReducer
    }
})