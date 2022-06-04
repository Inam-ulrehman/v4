import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { customFetchProducts } from '../../utils/axios'
import { toast } from 'react-toastify'

const initialState = {
  products: [],
  isLoading: false,
}

export const getProducts = createAsyncThunk(
  'products/getProducts',
  async (_, thunkAPI) => {
    try {
      const resp = await customFetchProducts.get()
      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      state.products = payload
    },
    [getProducts.rejected]: (state, { payload }) => {
      state.isLoading = false
      toast.error(payload)
    },
  },
})

export default productsSlice.reducer
