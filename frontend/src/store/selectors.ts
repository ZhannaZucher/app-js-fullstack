import type { RootState, AppDispatch } from "./store"
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux"

//typed useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//typed useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export const selectUser = (state: RootState) => state.user.userId
export const selectPosts = (state: RootState) => state.posts.data
