import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from "date-fns"
const initialState = [
    {
        id:nanoid(),
        title:"New Post 1",
        content:"Hello There 1",
        date:sub(new Date(),{minutes:10}).toISOString(),
        reactions:{
            thumbsup:0,
            heart:0,
            smile:0,
            laugh:0,
            cry:0,
            rocket:0
        }
    },
    {
        id:nanoid(),
        title:"New Post 2",
        content:"Hello There 2",
        date:sub(new Date(),{minutes:5}).toISOString(),
        reactions:{
            thumbsup:0,
            heart:0,
            smile:0,
            laugh:0,
            cry:0,
            rocket:0
        }
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
                        date:new Date().toISOString(),
                        reactions:{
                            thumbsup:0,
                            heart:0,
                            smile:0,
                            laugh:0,
                            cry:0,
                            rocket:0
                        }
                    }
                }
            }
        },
        reactionAdded:{
            reducer(state,action){
                const {postId,reaction} = action.payload;
                const existingPost = state.find(post=> post.id === postId);
                if(existingPost){
                    existingPost.reactions[reaction]++;
                }
            }
        }
    }
})


export default postSlice.reducer;
export const {postAdded,reactionAdded} = postSlice.actions;
export const selectAllPost = (state) => state.posts;