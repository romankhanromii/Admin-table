import { configureStore } from "@reduxjs/toolkit";
import  userslice  from "./Userslice";

const store=configureStore({
    reducer:{
        users:userslice,
    }
})

export default store;
