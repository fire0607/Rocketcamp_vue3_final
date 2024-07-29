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
        if (response.data.success) {
          this.items = response.data.data.carts || []
        } else {
          throw new Error(response.data.message || '獲取購物車失敗')
        }
      } catch (error) {
        console.error('Error fetching cart:', error)
        this.error = error.message
        throw error
      } finally {
        this.isLoading = false
      }
    },
    async updateQuantity (productId, quantity) {
      try {
        const response = await cartAPI.updateCartItem(productId, {
          product_id: productId,
          qty: quantity
        })
        if (response.data.success) {
          await this.fetchCart()
        } else {
          throw new Error(response.data.message || '更新數量失敗')
        }
      } catch (error) {
        console.error('Error updating quantity:', error)
        throw error
      }
    },
    async removeCartItem (productId) {
      this.isLoading = true
      this.error = null
      try {
        const response = await cartAPI.removeCartItem(productId)
        if (response.data.success) {
          await this.fetchCart() // 重新獲取購物車數據
        } else {
          throw new Error(response.data.message || '移除商品失敗')
        }
      } catch (error) {
        console.error('Error removing item from cart:', error)
        throw error
      } finally {
        this.isLoading = false
      }
    }
  },
  getters: {
    totalAmount () {
      return this.items.reduce((total, item) => total + item.final_total, 0)
    }
  }
})
