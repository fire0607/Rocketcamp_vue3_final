import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const isLoggedIn = ref(false)
  const token = ref(localStorage.getItem('token') || '')

  function setLoggedIn (status) {
    isLoggedIn.value = status
    if (status) {
      token.value = localStorage.getItem('token')
    } else {
      token.value = ''
      localStorage.removeItem('token')
    }
  }

  return { isLoggedIn, token, setLoggedIn }
})
