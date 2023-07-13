


import { createSlice } from '@reduxjs/toolkit'




// userSlice
export const userSlice = createSlice({
    name: 'user',
    initialState: {value: '',},
    reducers: {
      addUser: (state, action) => {
  
        console.log('inside user reducer, state:',JSON.stringify(state))
        console.log('action:', action)
        state.value = action.payload
      },
      deleteBlogs: (state) => {
        state.value -= 1
      }
    },
  })
  
  // user reducer exports
  export const { addUser } = userSlice.actions
  
  export default userSlice.reducer
  