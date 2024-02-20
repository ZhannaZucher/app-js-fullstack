import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../store/userSlice"
import postReducer from "../store/postSlice"

const store = configureStore({
  reducer: {
    user: userReducer,
    posts: postReducer,
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
