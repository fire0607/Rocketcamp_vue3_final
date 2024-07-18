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
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light px-0">
      <a class="navbar-brand" href="./index.html">Navbar</a>
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
          <a class="nav-item nav-link me-4 active" href="./index.html"
            >Home <span class="sr-only">(current)</span></a
          >
          <a class="nav-item nav-link me-4" href="./product.html">Product</a>
          <a class="nav-item nav-link me-4" href="./detail.html">Detail</a>
          <a class="nav-item nav-link" href="./cart.html"
            ><font-awesome-icon :icon="['fas', 'shopping-cart']" /></a>
        </div>
      </div>
    </nav>
    <div class="mt-3">
      <h3 class="mt-3 mb-4">Lorem ipsum</h3>
      <div class="row">
        <div class="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="border-0 ps-0">Lorem ipsum</th>
                <th scope="col" class="border-0">Lorem ipsum</th>
                <th scope="col" class="border-0">Lorem ipsum</th>
                <th scope="col" class="border-0"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-bottom border-top">
                <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                  <img
                    src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                    alt=""
                    style="width: 72px; height: 72px; object-fit: cover"
                  />
                  <p class="mb-0 fw-bold ms-3 d-inline-block">Lorem ipsum</p>
                </th>
                <td class="border-0 align-middle" style="max-width: 160px">
                  <div class="input-group pe-5">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon1"
                      >
                        <font-awesome-icon :icon="['fas', 'minus']" />
                      </button>
                    </div>
                    <input
                      type="text"
                      class="form-control border-0 text-center my-auto shadow-none"
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      value="1"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon2"
                      >
                        <font-awesome-icon :icon="['fas', 'plus']" />
                      </button>
                    </div>
                  </div>
                </td>
                <td class="border-0 align-middle">
                  <p class="mb-0 ms-auto">NT$12,000</p>
                </td>
                <td class="border-0 align-middle">
                  <font-awesome-icon :icon="['fas', 'times']" />
                </td>
              </tr>
              <tr class="border-bottom">
                <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                  <img
                    src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1916&q=80"
                    alt=""
                    style="width: 72px; height: 72px; object-fit: cover"
                  />
                  <p class="mb-0 fw-bold ms-3 d-inline-block">Lorem ipsum</p>
                </th>
                <td class="border-0 align-middle" style="max-width: 160px">
                  <div class="input-group pe-5">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon1"
                      >
                        <font-awesome-icon :icon="['fas', 'minus']" />
                      </button>
                    </div>
                    <input
                      type="text"
                      class="form-control border-0 text-center my-auto shadow-none"
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      value="1"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon2"
                      >
                        <font-awesome-icon :icon="['fas', 'plus']" />
                      </button>
                    </div>
                  </div>
                </td>
                <td class="border-0 align-middle">
                  <p class="mb-0 ms-auto">NT$12,000</p>
                </td>
                <td class="border-0 align-middle">
                  <font-awesome-icon :icon="['fas', 'times']" />
                </td>
              </tr>
            </tbody>
          </table>
          <div class="input-group w-50 mb-3">
            <input
              type="text"
              class="form-control rounded-0 border-bottom border-top-0 border-start-0 border-end-0 shadow-none"
              placeholder="Coupon Code"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-dark border-bottom border-top-0 border-start-0 border-end-0 rounded-0"
                type="button"
                id="button-addon2"
              >
              <font-awesome-icon :icon="['fas', 'paper-plane']" />
              </button>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <h4 class="fw-bold mb-4">Order Detail</h4>
            <table class="table text-muted border-bottom">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">
                    Subtotal
                  </th>
                  <td class="text-end border-0 px-0 pt-4">NT$24,000</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="border-0 px-0 pt-0 pb-4 font-weight-normal"
                  >
                    Payment
                  </th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">Total</p>
              <p class="mb-0 h4 fw-bold">NT$24,000</p>
            </div>
            <a href="./checkout.html" class="btn btn-dark w-100 mt-4"
              >Lorem ipsum</a
            >
          </div>
        </div>
      </div>
      <div class="my-5">
        <h3 class="fw-bold">Lorem ipsum dolor sit amet</h3>
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
      </div>
    </div>
  </div>
  <div class="bg-light py-4">
    <div class="container">
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start"
      >
        <p class="mb-0 fw-bold">Lorem ipsum dolor sit amet.</p>
        <div class="input-group w-md-50 mt-md-0 mt-3">
          <input type="text" class="form-control rounded-0" placeholder="" />
          <div class="input-group-append">
            <button class="btn btn-dark rounded-0" type="button" id="search">
              Lorem ipsum
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-dark py-5">
    <div class="container">
      <div
        class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"
      >
        <a class="text-white h4" href="./index.html">LOGO</a>
        <ul class="d-flex list-unstyled mb-0 h4">
          <li>
            <a href="#" class="text-white mx-3"
              ><font-awesome-icon :icon="['fab', 'facebook']" /></a>
          </li>
          <li>
            <a href="#" class="text-white mx-3"
              ><font-awesome-icon :icon="['fab', 'instagram']" /></a>
          </li>
          <li>
            <a href="#" class="text-white ms-3"><font-awesome-icon :icon="['fab', 'line']" /></a>
          </li>
        </ul>
      </div>
      <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-white"
      >
        <div class="mb-md-0 mb-1">
          <p class="mb-0">02-3456-7890</p>
          <p class="mb-0">service@mail.com</p>
        </div>
        <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
