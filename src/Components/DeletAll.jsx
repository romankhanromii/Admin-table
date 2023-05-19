import { useDispatch } from "react-redux"
import { Clear } from "../Store/Slice/Userslice"

export function DeletAll(){
    const dispatch=useDispatch()
    function clearall(){
        dispatch(Clear())
    }

    return(
        <div>
        <button onClick={clearall}>Delet </button>
        </div>
    )
    }