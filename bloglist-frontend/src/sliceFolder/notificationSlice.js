




import { createSlice } from '@reduxjs/toolkit'




// notificationSlice
export const notificationSlice = createSlice({
    name: 'notification',
    initialState: {value: '',},
    reducers: {

      addedUserNotification: (state, action) => {
  
        console.log('inside notification reducer, state:',JSON.stringify(state))
        console.log('action:', action)
  
        return 'notification'
      },
    },
  })
  
  // user reducer exports
  export const { addedUserNotification } = notificationSlice.actions
  
  export default notificationSlice.reducer
  







