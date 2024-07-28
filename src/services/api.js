import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getProducts = () => apiClient.get(`/api/${import.meta.env.VITE_APP_API_NAME}/products/all`)
export const getProduct = (id) => apiClient.get(`/api/${import.meta.env.VITE_APP_API_NAME}/product/${id}`)
