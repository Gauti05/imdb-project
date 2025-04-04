import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { addTask } from "../../redux/Slice/todoSlice";

function TodoList(){
    const [value,setValue] = useState("")
    const todoListTasks = useSelector((state)=>state.todoState.todoList)
    const dispatch = useDispatch()
    const onFormSubmit = function(e){
e.preventDefault()
dispatch(addTask(value))
setValue("")
    }
return <div>
    <form onSubmit={onFormSubmit}>
       <input onChange={(e) =>{
        setValue(e.target.value)
       }} value={value} type="text" placeholder="enter the task"/>

       <input type="submit" />
    </form>
    <div>
        {
            todoListTasks.map((todo) =>{
                return <h1>{todo}</h1>
            })
        }
    </div>
</div>
}

export default TodoList ;