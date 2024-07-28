<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'
import axios from 'axios'

const isLoggedIn = ref(false)
const router = useRouter()

const api = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  withCredentials: true
})

onMounted(() => {
  isLoggedIn.value = !!localStorage.getItem('token')
})

const handleUserIconClick = () => {
  if (isLoggedIn.value) {
    showUserMenu()
  } else {
    showLoginModal()
  }
}

const showUserMenu = () => {
  Swal.fire({
    title: '會員選項',
    html: `
      <button id="goToCart" class="btn btn-primary mb-2">前往購物車</button><br>
      <button id="logout" class="btn btn-danger">登出</button>
    `,
    showConfirmButton: false,
    showCancelButton: false,
    willOpen: () => {
      document.getElementById('goToCart').addEventListener('click', () => {
        Swal.close()
        router.push('/shopping-cart')
      })
      document.getElementById('logout').addEventListener('click', () => {
        Swal.close()
        logout()
      })
    }
  })
}

const showLoginModal = () => {
  Swal.fire({
    title: '會員登入',
    html: `
      <input type="text" id="username" class="swal2-input" placeholder="帳號">
      <input type="password" id="password" class="swal2-input" placeholder="密碼">
    `,
    confirmButtonText: '登入',
    showCancelButton: true,
    cancelButtonText: '取消',
    focusConfirm: false,
    preConfirm: () => {
      const username = Swal.getPopup().querySelector('#username').value
      const password = Swal.getPopup().querySelector('#password').value
      if (!username || !password) {
        Swal.showValidationMessage('請輸入帳號和密碼')
      }
      return { username, password }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      login(result.value.username, result.value.password)
    }
  })
}

const login = async (username, password) => {
  try {
    const response = await api.post('/admin/signin', {
      username,
      password
    })
    const { token, expired } = response.data
    document.cookie = `hexToken=${token}; expires=${new Date(expired)}; path=/;`
    localStorage.setItem('token', token)
    isLoggedIn.value = true
    Swal.fire('登入成功', '', 'success')
    router.push('/shopping-cart')
  } catch (error) {
    console.error('登入失敗:', error)
    Swal.fire('登入失敗', '請檢查您的帳號和密碼', 'error')
  }
}

const logout = async () => {
  try {
    console.log('開始登出流程')
    const response = await api.post('/logout')
    console.log('登出 API 響應:', response)

    handleLogoutSuccess()
  } catch (error) {
    console.error('登出失敗:', error.response || error)
    if (error.response && error.response.status === 400) {
      // 如果是 400 錯誤，我們假設用戶已經處於登出狀態
      console.log('用戶可能已經處於登出狀態')
      handleLogoutSuccess()
    } else {
      Swal.fire('登出失敗', '請檢查網絡連接並稍後再試', 'error')
    }
  } finally {
    console.log('登出流程結束')
  }
}

const handleLogoutSuccess = () => {
  localStorage.removeItem('token')
  document.cookie = 'hexToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
  isLoggedIn.value = false
  console.log('本地存儲和狀態已更新')
  Swal.fire('登出成功', '', 'success')
  router.push('/')
}

const checkLoginStatus = async () => {
  const token = localStorage.getItem('token')
  if (!token) {
    isLoggedIn.value = false
    return
  }

  try {
    // 這裡應該調用一個檢查 token 有效性的 API
    // 假設這個 API 是 '/api/user/check'
    await api.post('/api/user/check')
    isLoggedIn.value = true
  } catch (error) {
    console.error('Token 無效:', error)
    localStorage.removeItem('token')
    document.cookie = 'hexToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
    isLoggedIn.value = false
  }
}

onMounted(() => {
  checkLoginStatus()
})
</script>
<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/" class="navbar-brand"
        ><h1>
          <img
            src="/image/morning-dew-high-resolution-logo-transparent.png"
            alt="清晨微光 Morning Dew"
            height="45px"
          /></h1
      ></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link
            to="/"
            class="nav-item nav-link me-4 text-primary-2 text-primary-0-hover"
            >Home<span class="sr-only">(current)</span></router-link
          >
          <router-link
            to="/products"
            class="nav-item nav-link me-4 text-primary-2 text-primary-0-hover"
            >Product</router-link
          >
          <router-link
            to="/products/-O2ZJWs5lkueICLOooEE"
            class="nav-item nav-link me-4 text-primary-2 text-primary-0-hover"
          >
            Detail
          </router-link>
          <a href="#"
              class="nav-item nav-link me-4 text-primary-2 text-primary-0-hover"
              @click.prevent="handleUserIconClick"
          ><font-awesome-icon :icon="['fas', 'user-circle']" />
        </a>
          <router-link
            to="/shopping-cart"
            class="nav-item nav-link text-primary-2 text-primary-0-hover"
            ><font-awesome-icon :icon="['fas', 'shopping-cart']"
          /></router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped></style>
