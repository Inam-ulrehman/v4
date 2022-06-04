export const setCartItemsToLocalStorage = (items) => {
  localStorage.setItem('cart', JSON.stringify(items))
}

export const getCartItemsFromLocalStorage = () => {
  const result = localStorage.getItem('cart')
  const cart = result ? JSON.parse(result) : null

  return cart
}

export const removeCartItemsFromLocalStorage = () => {
  localStorage.removeItem('cart')
}

// UserLocalStorage

export const setUserInLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('user')
  const user = result ? JSON.parse(result) : null
  return user
}

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('user')
}
