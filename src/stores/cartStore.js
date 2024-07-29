import { defineStore } from 'pinia'
import { cartAPI } from '@/services/api'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    isLoading: false,
    error: null
  }),
  actions: {
    async addToCart (product, quantity = 1) {
      this.isLoading = true
      this.error = null
      try {
        const response = await cartAPI.addToCart({
          product_id: product.id,
          qty: quantity
        })
        console.log('API Response:', response.data) // 添加這行
        if (response.data.success) {
          this.items = response.data.data.carts || []
        } else {
          throw new Error(response.data.message)
        }
      } catch (error) {
        console.error('Error in addToCart:', error)
        this.error = error.response?.data?.message || error.message || '加入購物車失敗'
        throw error
      } finally {
        this.isLoading = false
      }
    },
    async fetchCart () {
      this.isLoading = true
      this.error = null
      try {
        const response = await cartAPI.getCart()
        console.log('Fetch cart response:', response.data)
        if (response.data.success) {
          this.items = response.data.data.carts || []
        } else {
          throw new Error(response.data.message)
        }
      } catch (error) {
        console.error('Error fetching cart:', error)
        this.error = error.message || '獲取購物車失敗'
      } finally {
        this.isLoading = false
      }
    },
    updateQuantity (productId, quantity) {
      const item = this.items.find(item => item.id === productId)
      if (item) {
        item.quantity = quantity
      }
    }
  },
  getters: {
    totalAmount () {
      return this.items.reduce((total, item) => total + item.final_total, 0)
    }
  }
})
