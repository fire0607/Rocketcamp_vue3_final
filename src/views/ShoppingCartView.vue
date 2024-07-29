<script setup>
import { useCartStore } from '@/stores/cartStore'
import SwiperSlider from '../components/SwiperSlider.vue'

const cartStore = useCartStore()

const removeItem = (productId) => {
  cartStore.removeFromCart(productId)
}

const updateQuantity = (productId, newQuantity) => {
  cartStore.updateQuantity(productId, newQuantity)
}

</script>
<template>
  <BaseLayout
    :show-navbar="true"
    :show-footer="true"
    container-class="my-custom-container"
  >
    <div class="container text-primary-2 lh-lg">
      <div class="mt-3">
        <h3 class="mt-3 mb-4 text-primary-2">購物車</h3>
        <div class="row">
          <div class="col-md-8">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col" class="border-0 ps-0 text-primary-2">商品資料</th>
                  <th scope="col" class="border-0 text-primary-2">數量</th>
                  <th scope="col" class="border-0 text-primary-2">小計</th>
                  <th scope="col" class="border-0 text-primary-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in cartStore.items" :key="item.id" class="border-bottom border-top">
                  <th scope="row" class="border-0 px-0 font-weight-normal py-4 text-primary-2">
                    <img :src="item.imageUrl" alt="" style="width: 72px; height: 72px; object-fit: cover" />
                    <p class="mb-0 fw-bold ms-3 d-inline-block">{{ item.title }}</p>
                  </th>
                  <td class="border-0 align-middle" style="max-width: 160px">
                    <div class="input-group pe-5">
                      <div class="input-group-prepend">
                        <button @click="updateQuantity(item.id, item.quantity - 1)" class="btn btn-white-primary-0 border-0 py-2" type="button">
                          <font-awesome-icon :icon="['fas', 'minus']" />
                        </button>
                      </div>
                      <input type="text" class="form-control border-0 text-center my-auto shadow-none" v-model="item.quantity" />
                      <div class="input-group-append">
                        <button @click="updateQuantity(item.id, item.quantity + 1)" class="btn btn-white-primary-0 border-0 py-2" type="button">
                          <font-awesome-icon :icon="['fas', 'plus']" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="border-0 align-middle">
                    <p class="mb-0 ms-auto text-primary-2">NT${{ item.price * item.quantity }}</p>
                  </td>
                  <td class="border-0 align-middle">
                    <font-awesome-icon @click="removeItem(item.id)" :icon="['fas', 'times']" class="btn btn-white-primary-0"/>
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
                  class="btn btn-white-primary-0 border-bottom border-top-0 border-start-0 border-end-0 rounded-0"
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
              <h4 class="fw-bold mb-4">訂單資訊</h4>
              <table class="table text-muted border-bottom">
                <tbody>
                  <tr>
                    <th scope="row" class="border-0 px-0 pt-4 font-weight-normal text-primary-2">小計</th>
                    <td class="text-end border-0 px-0 pt-4 text-primary-2">NT${{ cartStore.totalAmount }}</td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      class="border-0 px-0 pt-0 pb-4 font-weight-normal text-primary-2"
                    >
                      付款方式
                    </th>
                    <td class="text-end border-0 px-0 pt-0 pb-4 text-primary-2">ApplePay</td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 fw-bold">合計</p>
                <p class="mb-0 h4 fw-bold">NT${{ cartStore.totalAmount }}</p>
              </div>
              <router-link to="/checkout" class="btn btn-primary-2 w-100 mt-4">送出訂單</router-link>
            </div>
          </div>
        </div>
        <div class="my-5">
          <h3 class="fw-bold">其他人也看了...</h3>
          <SwiperSlider />
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
<style scoped></style>
