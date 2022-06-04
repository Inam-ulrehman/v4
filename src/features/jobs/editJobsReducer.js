import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
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
  id: '',
}

export const handleEditJob = createAsyncThunk(
  'job/handleEditJob',
  async (job, thunkAPI) => {
    const { company, position, jobLocation, jobType, status, id } = job
    const editData = { company, position, jobLocation, jobType, status }
    try {
      const resp = await customFetchUsers.patch(`/jobs/${id}`, editData, {
        headers: {
          authorization: `Bearer ${thunkAPI.getState().user.serverUser.token}`,
        },
      })
      return resp.statusText
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response)
    }
  }
)

const editJobsReducer = createSlice({
  name: 'editJob',
  initialState,
  reducers: {
    getEditJobValues: (state, { payload }) => {
      const { name, value } = payload
      state[name] = value
    },
    getEditValuesHoldJobs: (state, { payload }) => {
      const { company, position, jobLocation, jobType, status, id } = payload

      state.company = company
      state.position = position
      state.jobLocation = jobLocation
      state.jobType = jobType
      state.status = status
      state.id = id
    },
  },
  extraReducers: {
    [handleEditJob.pending]: (state) => {},
    [handleEditJob.fulfilled]: (state, { payload }) => {
      toast.success(`updated status : ${payload}`, {
        position: 'top-center',
      })
    },
    [handleEditJob.rejected]: (state) => {
      toast.error('There is a problem...')
    },
  },
})

export const { getEditJobValues, getEditValuesHoldJobs } =
  editJobsReducer.actions
export default editJobsReducer.reducer
