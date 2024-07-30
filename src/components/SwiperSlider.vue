<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'
import Swiper from 'swiper'
import 'swiper/css'

const swiperInstance = ref(null)
const products = ref([
  {
    id: '-O2ZKO2TBg5a6cHwNSLT',
    name: '晨曦微光',
    image: 'https://imgur.com/y1xxOqY.png',
    price: 2000,
    originalPrice: 2320
  },
  {
    id: '-O2ZKz3kzt_sh_RLZPga',
    name: '露珠輕語',
    image: 'https://imgur.com/u4zKCig.png',
    price: 2300,
    originalPrice: 2450
  },
  {
    id: '-O2ZLTWxBfv8JYSYKLay',
    name: '晨風綠意',
    image: 'https://imgur.com/jEpLp1A.png',
    price: 2000,
    originalPrice: 2320
  },
  {
    id: '-O2ZMWC1B1xmgzIee9OH',
    name: '微風拂曉',
    image: 'https://imgur.com/vuSgsmx.png',
    price: 2300,
    originalPrice: 2450
  },
  {
    id: '-O2ZMjmErQEAfiYf6DlQ',
    name: '晨光花影',
    image: 'https://imgur.com/u4zKCig.png',
    price: 2000,
    originalPrice: 2320
  }
])

const router = useRouter()

const goToProductDetail = (productId) => {
  router.push({ name: 'ProductDetail', params: { id: productId } })
}

onMounted(() => {
  swiperInstance.value = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    slidesPerView: 2,
    spaceBetween: 10,
    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
})

onUnmounted(() => {
  if (swiperInstance.value) {
    swiperInstance.value.update()
  }
})
</script>

<template>
  <div class="swiper-container mt-4 mb-5">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="product in products" :key="product.id">
        <div class="card border-0 mb-4 position-relative position-relative">
          <img
            :src="product.image"
            class="card-img-top rounded-0"
            :alt="product.name"
          />
          <a href="#" class="text-primary-2"> </a>
          <div class="card-body p-0">
            <h4 class="mb-0 mt-3 text-primary-2">
              <a
                href="#"
                class="text-primary-2"
                @click.prevent="goToProductDetail(product.id)"
              >
                {{ product.name }}
              </a>
            </h4>
            <p class="card-text mb-0 text-primary-2">
              NT${{ product.price }}
              <span class="text-primary-2"
                ><del>NT${{ product.originalPrice }}</del></span
              >
            </p>
            <p class="text-primary-2 mt-3"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swiper-container {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  width: auto;
}

.card {
  width: 100%;
}

.card-img-top {
  width: 100%;
  height: auto;
  object-fit: cover;
}
</style>
