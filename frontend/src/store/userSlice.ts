import { PayloadAction, createSlice } from "@reduxjs/toolkit"

type UserState = {
  userId: null | string
}

const initialState: UserState = {
  userId: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<string>) => {
      state.userId = action.payload
    },
  },
})

export const { getUser } = userSlice.actions
export default userSlice.reducer
