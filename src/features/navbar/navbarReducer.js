import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isNavBarOpen: false,
  toggleBar: false,
}

const navbar = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    closeNavbar: (state) => {
      state.isNavBarOpen = false
    },
    openNavbar: (state) => {
      state.isNavBarOpen = true
    },
    toggleBar: (state) => {
      state.toggleBar = !state.toggleBar
    },
  },
})

export const { closeNavbar, openNavbar, toggleBar } = navbar.actions
export default navbar.reducer
