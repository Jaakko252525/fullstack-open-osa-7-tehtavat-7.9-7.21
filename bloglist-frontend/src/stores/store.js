

import { configureStore } from '@reduxjs/toolkit'
import blogsSlice from '../sliceFolder/blogsSlice'
import userSlice from '../sliceFolder/userSlice'


export default configureStore({
  reducer: {
    blogs: blogsSlice,
    user: userSlice
  },
})











