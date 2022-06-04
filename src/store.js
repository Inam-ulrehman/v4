import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartReducer'
import navbarReducer from './features/navbar/navbarReducer'
import productsReducer from './features/products/productsReducer'
import editUserReducer from './features/user/editUserReducer'
import userReducer from './features/user/userReducer'
import jobsReducer from './features/jobs/jobsReducer'
import addJobsReducer from './features/jobs/addJobsReducer'
import editJobsReducer from './features/jobs/editJobsReducer'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    user: userReducer,
    navbar: navbarReducer,
    editUser: editUserReducer,
    jobs: jobsReducer,
    addJobs: addJobsReducer,
    editJob: editJobsReducer,
  },
})
