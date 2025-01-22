import {configureStore} from "@reduxjs/toolkit";
import postSlice from "./features/post/postSlice";
import userSlice from "./features/Users/userSlice"
const store = configureStore({
    reducer:{
        posts:postSlice,
        users:userSlice,
    },
})

export default store;