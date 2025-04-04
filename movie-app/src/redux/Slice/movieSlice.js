 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
 import axios from "axios"

 export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async(pageNumber)=>{
        const res =  await fetch(`${import.meta.env.VITE_REACT_APP_MOVIES_BACKEND_URL}${pageNumber}`)
      if(!res.ok){
        throw new Error("failed to fetch movies")
      }
       return res.json();
        }
 )


 const movieSlice = createSlice({
    name:'movies',
    initialState:{
        movies:[],
        loading:true,
        pageNumber:1
    },
    reducers:{
        nextpagefn:(state)=>{
            state.pageNumber+=1
        },
        previouspageFn:(state)=>{
     state.pageNumber-=1;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchMovies.pending,(state)=>{
            state.loading = true
        })

        .addCase(fetchMovies.fulfilled,(state,action)=>{
state.loading = false;
state.movies = action.payload.results;
        })
        .addCase(fetchMovies.rejected,(state,dispatch)=>{

        })
    }
 })
 export const{nextpagefn,previouspageFn} = movieSlice.actions

 export default movieSlice.reducer