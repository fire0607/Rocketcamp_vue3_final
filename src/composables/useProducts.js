import { ref } from 'vue'
import { getProducts } from '@/services/api'

export function useProducts () {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  // 取得產品資料
  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await getProducts()
      if (Array.isArray(response.data.products)) {
        products.value = response.data.products
      } else {
        throw new Error('Unexpected API response format')
      }
    } catch (err) {
      console.error('Error fetching products:', err)
      error.value = err.message || 'Failed to fetch products'
    } finally {
      loading.value = false
    }
  }

  return {
    products,
    loading,
    error,
    fetchProducts
  }
}
