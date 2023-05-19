import {createSlice} from "@reduxjs/toolkit"

    const userslice =createSlice({
        name:"user",
        initialState:[],
        reducers:{
            Adduser(state,action){
                state.push(action.payload)
                // console.log(action.payload)
            },
            removeuser(state,action){
                // console.log("hi i am delet",action.payload)
                state.splice(action.payload,1 )
            },
            Clear(state,action){
                // console.log("hi delet")
                return []
            },

        },

        
    });
    console.log(userslice.actions);

    export default userslice.reducer;
    export const {Adduser,removeuser,Clear}=userslice.actions
   