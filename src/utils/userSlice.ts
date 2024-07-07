import { createSlice } from '@reduxjs/toolkit'


const userSlice = createSlice({
  name: 'user',
  initialState: null, // state: null
  reducers: {
    addUser: (state, action) => {
      // first state: null
      return action.payload // state: action.playload
    },
    removeUser: (state) => {
      return null // after remove user state will be null
    },
  },
})

export const { addUser, removeUser } = userSlice.actions

export default userSlice.reducer
