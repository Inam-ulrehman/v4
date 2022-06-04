import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetchUsers } from '../../utils/axios'
import {
  getUserFromLocalStorage,
  removeUserFromLocalStorage,
  setUserInLocalStorage,
} from '../../utils/localStorage'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  isLoading: false,
  serverUser: getUserFromLocalStorage() || [],
}

// handleRegisterUserThunk
export const handleRegisterUserThunk = createAsyncThunk(
  'get/handleRegisterUserThunk',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetchUsers.post('auth/register', user)
      return resp.data.user
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

// handleLoginUserThunk

export const handleLoginUserThunk = createAsyncThunk(
  'user/handleLoginUserThunk',
  async (user, thunkAPI) => {
    try {
      const resp = await customFetchUsers.post('auth/login', user)
      return resp.data.user
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleFormValues: (state) => {
      state.isMember = !state.isMember
    },
    getFormValues: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
    logOut: (state) => {
      state.serverUser = []
      removeUserFromLocalStorage()
      toast.info('See you soon...')
    },
  },
  extraReducers: {
    [handleRegisterUserThunk.pending]: (state) => {
      state.isLoading = true
    },
    [handleRegisterUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.serverUser = payload
      toast.success(`hello there ${payload.name}`, {
        position: 'top-center',
      })
      setUserInLocalStorage(payload)
    },
    [handleRegisterUserThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
    [handleLoginUserThunk.pending]: (state) => {
      state.isLoading = true
    },
    [handleLoginUserThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.serverUser = payload
      toast.success(`welcome back ${payload.name}`, {
        position: 'top-center',
      })
      setUserInLocalStorage(payload)
    },
    [handleLoginUserThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export const { toggleFormValues, getFormValues, logOut } = userReducer.actions

export default userReducer.reducer
