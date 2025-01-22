import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:0,author:"Select Author"},
    {id:1,author:"Naresh"},
    {id:2,author:"Arsath"},
    {id:3,author:"Saravana Prabu"},
]
const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{}
})


export default userSlice.reducer;
export const selectAllUser = (state)=>state.users;