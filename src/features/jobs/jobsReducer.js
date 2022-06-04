import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'
import { customFetchUsers } from '../../utils/axios'

const initialState = {
  job: [],
  isLoading: false,
  deletingJob: false,
}

// Axios get === getAllJobs ===
export const getAllJobs = createAsyncThunk(
  'jobs/getAllJobs',
  async (_, thunkAPI) => {
    try {
      const resp = await customFetchUsers.get('/jobs', {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.serverUser.token}`,
        },
      })
      return resp.data.jobs
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
  }
)

// Axios delete ==== deleteJob ===

export const handleDeleteJob = createAsyncThunk(
  'job/handleDeleteJob',
  async (id, thunkAPI) => {
    try {
      const resp = await customFetchUsers.delete(`/jobs/${id}`, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.serverUser.token}`,
        },
      })
      return resp.data.msg
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.msg)
    }
    // /jobs/jobId
  }
)

const jobReducer = createSlice({
  name: 'jobs',
  initialState,
  reducers: {},
  extraReducers: {
    [getAllJobs.pending]: (state) => {
      state.isLoading = true
    },
    [getAllJobs.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.job = payload
    },
    [getAllJobs.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload, {
        position: 'top-center',
      })
    },
    [handleDeleteJob.pending]: (state) => {},
    [handleDeleteJob.fulfilled]: (state, { payload }) => {
      toast.info(payload, {
        position: 'top-center',
      })
      state.deletingJob = !state.deletingJob
    },
    [handleDeleteJob.rejected]: (state, { payload }) => {
      toast.error(payload)
    },
  },
})

export const { deleteJob } = jobReducer.actions

export default jobReducer.reducer
