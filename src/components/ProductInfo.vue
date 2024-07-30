<script setup>
import { ref } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import Swal from 'sweetalert2'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const quantity = ref(1)
const cartStore = useCartStore()

const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--
}

const increaseQuantity = () => {
  quantity.value++
}

const addToCart = async () => {
  try {
    await cartStore.addToCart(props.product, quantity.value)

    Swal.fire({
      title: '成功！',
      text: `已將 ${quantity.value} 件 ${props.product.title} 加入購物車`,
      icon: 'success',
      confirmButtonText: '確定',
      timer: 1200,
      timerProgressBar: true,
      showConfirmButton: false
    })

    quantity.value = 1
  } catch (error) {
    console.error(error)
    Swal.fire({
      title: '錯誤',
      text: error.message || '加入購物車失敗',
      icon: 'error',
      confirmButtonText: '確定'
    })
  }
}
</script>
<template>
  <div class="product-info col-md-5">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb bg-white px-0 mb-0 py-3">
        <li class="breadcrumb-item">
          <router-link to="/" class="text-primary-2">Home</router-link>
        </li>
        <li class="breadcrumb-item">
          <router-link to="/products" class="text-primary-2"
            >Product</router-link
          >
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ product.title }}
        </li>
      </ol>
    </nav>
    <h2 class="fw-bold h1 mb-1 text-primary-2">{{ product.title }}</h2>
    <p class="mb-0 text-primary-2 text-end">
      <del>NT${{ product.origin_price }}</del>
    </p>
    <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
    <div class="row align-items-center">
      <div class="col-6">
        <div class="input-group my-3 bg-primary-1 rounded text-primary-2">
          <button
            class="btn btn-outline-dark border-0 py-2 bg-primary-1"
            @click="decreaseQuantity"
          >
            <font-awesome-icon :icon="['fas', 'minus']" />
          </button>
          <input
            type="text"
            class="form-control border-0 text-center my-auto shadow-none bg-primary-1"
            v-model="quantity"
          />
          <button
            class="btn btn-outline-dark border-0 py-2 bg-primary-1"
            @click="increaseQuantity"
          >
            <font-awesome-icon :icon="['fas', 'plus']" />
          </button>
        </div>
      </div>
      <div class="col-6">
        <button
          @click="addToCart"
          class="text-nowrap btn btn-primary-0 w-100 py-2"
        >
          加入購物車
        </button>
      </div>
    </div>
  </div>
</template>
