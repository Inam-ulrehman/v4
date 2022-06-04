import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetchUsers } from '../../utils/axios'

const initialState = {
  isLoading: false,
  position: '',
  company: '',
  jobLocation: '',
  jobTypeOptions: ['full-time', 'part-time', 'remote', 'internship'],
  jobType: 'full-time',
  statusOptions: ['interview', 'declined', 'pending'],
  status: 'pending',
}

// Axios post === addJobsThunk ===
export const addJobsThunk = createAsyncThunk(
  'job/addJobsThunk',
  async (job, thunkAPI) => {
    try {
      const resp = await customFetchUsers.post('/jobs', job, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.serverUser.token}`,
        },
      })
      return resp.statusText
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
)

// createAsyncThunk
const addJobsReducer = createSlice({
  name: 'addJobs',
  initialState,
  reducers: {
    getPostJobValues: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
  },
  extraReducers: {
    [addJobsThunk.pending]: (state) => {
      state.isLoading = true
    },
    [addJobsThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      toast.success(`Job ${payload} ...`)
    },
    [addJobsThunk.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.warn(payload, {
        position: 'top-center',
      })
    },
  },
})

export const { getPostJobValues } = addJobsReducer.actions
export default addJobsReducer.reducer
