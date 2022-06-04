import { React, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { getProducts } from './features/products/productsReducer'
import {
  Error,
  Home,
  Products,
  SharedLayout,
  SharedProductLayout,
  SingleProduct,
  Cart,
  LoginRegister,
} from './pages'
import {
  AddJobs,
  AllJobs,
  Dashboard,
  EditJobs,
  Profile,
  SharedDashboardLayout,
} from './pages/dashboard'
import { useDispatch, useSelector } from 'react-redux'
import { cartTotal } from './features/cart/cartReducer'

const App = () => {
  const dispatch = useDispatch()
  const { cartItems } = useSelector((state) => state.cart)

  useEffect(() => {
    dispatch(getProducts())
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    dispatch(cartTotal())
    // eslint-disable-next-line
  }, [cartItems])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />

          <Route path='*' element={<Error />} />
          <Route path='login' element={<LoginRegister />} />
          <Route path='dashboard' element={<SharedDashboardLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='profile' element={<Profile />} />
            <Route path='add-jobs' element={<AddJobs />} />
            <Route path='all-jobs' element={<AllJobs />} />
            <Route path='edit-jobs' element={<EditJobs />} />
          </Route>
          <Route path='products' element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path='/products/:productId' element={<SingleProduct />} />
            <Route path='/products/cart' element={<Cart />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
