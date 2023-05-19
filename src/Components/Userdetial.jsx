import { DeletAll } from "./DeletAll";
import { fakeuserdata  } from "../api/Index";
import { useDispatch } from "react-redux";
import { Adduser } from "../Store/Slice/Userslice";
import { Displayuser } from "./Displayuser";


 export function  Userdetial(){
    const dispatch=useDispatch()
    const addNewuser=(payload)=>{
        console.log(payload)
        dispatch(Adduser(payload))
    }
    return (
        <>
        <div>
        <h1>Hello this is user detial</h1>
        <button onClick={()=>addNewuser(fakeuserdata())}>AddUser</button>
        </div>
        <ul>
            <Displayuser/>
        </ul>
        <hr />
        <DeletAll/>
        </>
    )
        
    
 }