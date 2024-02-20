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
  },
})

export const { getPosts, createPost } = postSlice.actions
export default postSlice.reducer
