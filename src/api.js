import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'your-api-base-url',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const getProducts = () => apiClient.get('/products')
export const getProduct = (id) => apiClient.get(`/products/${id}`)
