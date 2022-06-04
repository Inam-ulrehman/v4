import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetchUsers } from '../../utils/axios'
import {
  getUserFromLocalStorage,
  setUserInLocalStorage,
} from '../../utils/localStorage'

const initialState = {
  profile: getUserFromLocalStorage() || null,
  isEditing: false,
}

// Axios patch === profileUpdateThunk ===
export const profileUpdateThunk = createAsyncThunk(
  'user/profileUpdateThunk',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetchUsers.patch('/auth/updateUser', user, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.serverUser.token}`,
        },
      })
      return resp.data.user
    } catch (error) {
      return error.response.data.msg
    }
  }
)

export const editUserReducer = createSlice({
  name: 'editUser',
  initialState,
  reducers: {
    getProfileValues: (state, { payload }) => {
      const { name, value } = payload
      state.profile[name] = value
    },
  },
  extraReducers: {
    [profileUpdateThunk.pending]: (state) => {
      state.isEditing = true
    },

    [profileUpdateThunk.fulfilled]: (state, { payload }) => {
      state.isEditing = false
      setUserInLocalStorage(payload)
      toast.success('Profile updated....', {
        position: 'top-center',
      })
    },

    [profileUpdateThunk.rejected]: (state, { payload }) => {
      state.isEditing = false
      toast.error(payload)
    },
  },
})
export const { getProfileValues } = editUserReducer.actions
export default editUserReducer.reducer
