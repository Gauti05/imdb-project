import {createSlice} from "@reduxjs/toolkit"

const TodoSlice = createSlice({
    name:"todolist",
    initialState:{
        todoList:[]
    },
    reducers:{
        addTask:(state,action)=>{
      state.todoList = [...state.todoList,action.payload]
        }
    }
})

export  const {addTask} = TodoSlice.actions
export default TodoSlice.reducer