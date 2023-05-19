 import { useSelector,useDispatch } from "react-redux"
import styled from "styled-components"
import { removeuser } from "../Store/Slice/Userslice"
 export function Displayuser(){

    const data=useSelector((state)=>{
        return state.users
    })
    console.log(data)
    const dispatch=useDispatch()
    function deletuser(id){
        dispatch(removeuser(id))

    }
    return (
        <>
          {data.map((user, id) => {
            return (
              <li key={id}>
                {user}
                <button style={{marginLeft:"10px",border:"1px solid red"}} onClick={deletuser}>Delet</button>
              </li>
            );
          })}
        </>
      );
      
   
    
     
       
       
    
   
 
}
