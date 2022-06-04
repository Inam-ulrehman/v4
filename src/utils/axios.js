import axios from 'axios'

export const customFetchProducts = axios.create({
  baseURL: 'https://course-api.com/react-store-products',
})

export const customFetchUsers = axios.create({
  baseURL: `https://jobify-prod.herokuapp.com/api/v1/toolkit`,
})
