





























import { createSlice } from '@reduxjs/toolkit'


// userSlice
export const userLoggedInSlice = createSlice({
    name: 'userLoggedIn',
    initialState: {value: '',},
    reducers: {
      logged: (state, action) => {
  
        console.log('inside loggedInUser reducer, state:',JSON.stringify(state))
        console.log('action logg:', action)
        state.value = action.payload
      }
    },
  })
  
  // user reducer exports
  export const { logged } = userLoggedInSlice.actions
  
  export default userLoggedInSlice.reducer

















