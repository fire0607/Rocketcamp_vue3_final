import { ref } from 'vue'
import { getProducts } from '@/services/api'

export function useProducts () {
  const products = ref([])
  const loading = ref(false)
  const error = ref(null)

  const fetchProducts = async () => {
    loading.value = true
    error.value = null
    try {
      const response = await getProducts()
      products.value = response.data
    } catch (err) {
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
