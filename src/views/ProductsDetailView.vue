<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import ProductImage from '@/components/ProductImage.vue'
import ProductInfo from '@/components/ProductInfo.vue'
import SwiperSlider from '../components/SwiperSlider.vue'

const API_URL = import.meta.env.VITE_APP_API_URL
const API_NAME = import.meta.env.VITE_APP_API_NAME
const route = useRoute()
const product = ref(null)
const loading = ref(true)
const error = ref(null)

const fetchProductDetails = async (productId) => {
  loading.value = true
  error.value = null
  try {
    const response = await fetch(`${API_URL}/api/${API_NAME}/product/${productId}`)
    console.log('Response status:', response)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    console.log('Response data:', data)

    product.value = data.product
  } catch (err) {
    console.error('Failed to fetch product details:', err)
    error.value = `錯誤: ${err.message}. 請檢查網絡連接或聯繫管理員。`
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  if (route.params.id) {
    fetchProductDetails(route.params.id)
  }
})
</script>

<template>
  <BaseLayout
    :show-navbar="true"
    :show-footer="true"
    container-class="my-custom-container"
  >
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Error: {{ error }}</div>
    <div v-if="product" class="container text-primary-2 lh-lg">
      <div class="row align-items-center">
        <ProductImage :image="product.imageUrl" />
        <ProductInfo :product="product" />
      </div>
      <div class="row my-5">
        <div class="col-md-4">
          <p>{{ product.description }}</p>
        </div>
        <div class="col-md-3">
          <p class="text-primary-2 fw-bolder">{{ product.content }}</p>
        </div>
      </div>
      <h3 class="fw-bold">其他人也看了...</h3>
      <SwiperSlider />
    </div>
    <div v-else>找不到產品!</div>
  </BaseLayout>
</template>
<style scoped></style>
