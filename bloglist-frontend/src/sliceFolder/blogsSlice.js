
import { createSlice } from '@reduxjs/toolkit'



export const blogsSlice = createSlice({
    name: 'blogs',
    initialState: {value: '',},
    reducers: {
      addBlogs: (state, action) => {

        console.log('inside blog reducer, state:',JSON.stringify(state))
        console.log('state value', state.value)
        console.log('actionsssss:', action)
        
        state.value = action.payload
      },
      deleteBlogs: (state) => {
        state.value -= 1
      }
    },
  })


// blog reducer exports
export const { addBlogs } = blogsSlice.actions

export default blogsSlice.reducer


















