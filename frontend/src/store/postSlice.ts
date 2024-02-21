import { createSlice } from "@reduxjs/toolkit"
import { Post } from "../../types"

type PostState = {
  data: Post[]
}

const initialState: PostState = {
  data: [],
}

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.data = action.payload
    },
    createPost: (state, action) => {
      state.data.push(action.payload)
    },
    editPost: (state, action) => {
      state.data = state.data.map((post) => {
        if (post._id === action.payload[1]) {
          return {
            ...post,
            message: action.payload[0],
          }
        } else {
          return post
        }
      })
    },
  },
})

export const { getPosts, createPost, editPost } = postSlice.actions
export default postSlice.reducer
