import { createSlice } from '@reduxjs/toolkit'

export const newNameSlice = createSlice({
  name: 'changeName',
  initialState: {
    value:' '
  },
  reducers: {

    changerNom: (state, action) => {
      state.value = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { changerNom } = newNameSlice.actions

export default newNameSlice.reducer