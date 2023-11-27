import { configureStore } from '@reduxjs/toolkit'
import newNameSlice from './slice'

export default configureStore({
  reducer: {
    changeName:newNameSlice,
  }
})