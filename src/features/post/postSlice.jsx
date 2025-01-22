import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = [
    {
        id:nanoid(),
        title:"New Post 1",
        content:"Hello There 1",
    },
    {
        id:nanoid(),
        title:"New Post 2",
        content:"Hello There 2",
    }
]
const postSlice = createSlice({
    name:"posts",
    initialState,
    reducers:{
        postAdded:{
            reducer(state,action){
                state.push(action.payload)
            },
            prepare({title,content,userId}){
                return {
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        userId,
                    }
                }
            }
        }
    }
})


export default postSlice.reducer;
export const {postAdded} = postSlice.actions;
export const selectAllPost = (state) => state.posts;