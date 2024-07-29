import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export const getProducts = () => apiClient.get(`/api/${import.meta.env.VITE_APP_API_NAME}/products/all`)
export const getProduct = (id) => apiClient.get(`/api/${import.meta.env.VITE_APP_API_NAME}/product/${id}`)

// 新增的身份驗證相關方法
export const login = (username, password) => apiClient.post('/admin/signin', { username, password })
export const logout = () => apiClient.post('/logout')
export const checkLoginStatus = () => apiClient.post('/api/user/check')
