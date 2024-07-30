<script setup>
import { onMounted } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

const cartStore = useCartStore()
const router = useRouter()

onMounted(async () => {
  try {
    await cartStore.fetchCart()
    if (cartStore.items.length > 0) {
      await cartStore.clearCart()
    }
    showSuccessPopup()
    setTimeout(() => {
      router.push('/')
    }, 5000)
  } catch (error) {
    console.error('Error in success page:', error)
    router.push('/')
  }
})

function showSuccessPopup () {
  Swal.fire({
    title: '訂單已送出！',
    text: '3秒後將返回首頁',
    icon: 'success',
    timer: 3000,
    timerProgressBar: true,
    showConfirmButton: false
  })
}
</script>
<template>
  <div class="position-relative d-flex">
    <div class="container d-flex flex-column" style="min-height: 100vh">
      <nav class="navbar navbar-expand-lg navbar-light px-0">
        <router-link to="/" class="navbar-brand"
          ><h1>
            <img
              src="https://imgur.com/HV6rgTW.png"
              alt="清晨微光 Morning Dew"
              height="45px"
            /></h1
        ></router-link>
      </nav>
      <div class="row my-auto pb-7">
        <div class="col-md-4 d-flex flex-column text-primary-2">
          <div class="my-auto">
            <h2 class="fw-bold">訂單已成立</h2>
            <p>感謝您的訂購，我們會盡速為您安排出貨。</p>
            <router-link to="/" class="btn btn-primary-2 mt-4 px-5"
              ><font-awesome-icon
                :icon="['fas', 'chevron-left']"
                class="me-2"
              />
              回到首頁</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div
      class="w-md-50 w-100 position-absolute opacity-1"
      style="
        z-index: -1;
        min-height: 100vh;
        right: 0;
        background-image: url(https://imgur.com/EKvvsp7.png);
        background-size: 150%;
        background-color: rgb(0, 0, 0, 0.1);
        background-blend-mode: multiply;
      "
    ></div>
  </div>
</template>
<style scoped></style>
