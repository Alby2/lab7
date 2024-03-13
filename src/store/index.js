import { configureStore } from '@reduxjs/toolkit'
import postReducers from './reducers/posts/postSlice'

export const store = configureStore({
  reducer: {
    posts:postReducers
  },
})