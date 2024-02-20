import type { RootState, AppDispatch } from "./store"
import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux"

//typed useSelector
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//typed useDispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

// export const selectPictures = (state: RootState) => state.pictures.pictures
export const selectUser = (state: RootState) => state.user.userId
