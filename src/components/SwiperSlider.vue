<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Swiper from 'swiper'
import 'swiper/css'

const swiperInstance = ref(null)

const products = ref([
  {
    id: 1,
    name: 'Lorem ipsum',
    image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    price: 1080,
    originalPrice: 1200
  },
  {
    id: 1,
    name: 'Lorem ipsum',
    image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    price: 1080,
    originalPrice: 1200
  },
  {
    id: 1,
    name: 'Lorem ipsum',
    image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    price: 1080,
    originalPrice: 1200
  },
  {
    id: 1,
    name: 'Lorem ipsum',
    image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    price: 1080,
    originalPrice: 1200
  },
  {
    id: 1,
    name: 'Lorem ipsum',
    image: 'https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    price: 1080,
    originalPrice: 1200
  }
])

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
    swiperInstance.value.destroy()
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
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3">
                <a href="#">{{ product.name }}</a>
              </h4>
              <p class="card-text mb-0">
                NT${{ product.price }}
                <span class="text-muted"
                  ><del>NT${{ product.originalPrice }}</del></span
                >
              </p>
              <p class="text-muted mt-3"></p>
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
