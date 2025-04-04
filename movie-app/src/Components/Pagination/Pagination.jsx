import { useState } from "react"

function Pagination(props){
const{pageNumber,previouspageFn,nextpagefn} = props

return <div className="text-white flex justify-center items-center bg-gray-400 mt-8 h-[50px]">
    <div onClick={previouspageFn} className="px-8 cursor-pointer">Prev</div>
    <div>{pageNumber}</div>
    <div onClick={nextpagefn} className="px-8 cursor-pointer">next</div>
</div>
}

export default Pagination