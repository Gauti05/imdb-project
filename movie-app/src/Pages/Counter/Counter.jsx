import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../../redux/Slice/counterSlice"
function Counter(){

    const countValue = useSelector((state)=>state.count.value)
    const dispatch = useDispatch()
    const onIncrement = () =>{
dispatch(increment())
    }

    const onDecrement = () =>{
dispatch(decrement())
    }


    return <div>
     <h2>Counter: {countValue}</h2>
     <button className="m-5" onClick={onIncrement}>Increment</button>
     <button className="" onClick={onDecrement}>Decrement</button>
     </div>
}

export default Counter