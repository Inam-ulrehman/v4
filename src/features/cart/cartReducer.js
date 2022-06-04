import { createSlice } from '@reduxjs/toolkit'
import {
  getCartItemsFromLocalStorage,
  setCartItemsToLocalStorage,
  removeCartItemsFromLocalStorage,
} from '../../utils/localStorage'

const initialState = {
  cartItems: getCartItemsFromLocalStorage() || [],
  cartAmount: 0,
  cartTotal: 0,
}

const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductInCart: (state, { payload }) => {
      let tempProduct = { ...payload, amount: 1 }
      const productIndex = state.cartItems.findIndex(
        (item) => item.id === payload.id
      )
      if (productIndex >= 0) {
        state.cartItems[productIndex].amount += 1
      } else {
        state.cartItems.push(tempProduct)
        setCartItemsToLocalStorage(state.cartItems)
      }
    },
    clearCart: (state) => {
      state.cartItems = []
      removeCartItemsFromLocalStorage()
    },
    removeSingleItem: (state, { payload }) => {
      state.cartItems = state.cartItems.filter((item) => item.id !== payload)
      setCartItemsToLocalStorage(state.cartItems)
    },
    increaseAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload)
      cartItem.amount = cartItem.amount + 1
      setCartItemsToLocalStorage(state.cartItems)
    },
    decreaseAmount: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => {
        return item.id === payload
      })
      cartItem.amount = cartItem.amount - 1
      setCartItemsToLocalStorage(state.cartItems)
    },
    cartTotal: (state) => {
      let amount = 0
      let price = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        price += item.price * item.amount
      })
      state.cartAmount = amount
      state.cartTotal = price
    },
  },
})

export const {
  addProductInCart,
  clearCart,
  removeSingleItem,
  increaseAmount,
  decreaseAmount,
  cartTotal,
} = cartReducer.actions

export default cartReducer.reducer
