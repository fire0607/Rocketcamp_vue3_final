<script setup>
import { onMounted } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import SwiperSlider from '../components/SwiperSlider.vue'
import Swal from 'sweetalert2'

const cartStore = useCartStore()

const removeItem = async (productId) => {
  const result = await Swal.fire({
    title: '確定要刪除此商品嗎？',
    text: '你...忍心拒絕我們的好產品？',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: '是的，無情拒絕',
    cancelButtonText: '取消，再想一下',
    reverseButtons: true
  })

  if (result.isConfirmed) {
    try {
      await cartStore.removeCartItem(productId)
      Swal.fire(
        '已刪除!',
        '商品已從購物車中移除。',
        'success'
      )
    } catch (error) {
      Swal.fire(
        '錯誤!',
        '刪除商品時發生錯誤，請稍後再嘗試。',
        'error'
      )
    }
  }
}

const updateQuantity = async (productId, newQuantity) => {
  if (newQuantity > 0) {
    try {
      await cartStore.updateQuantity(productId, newQuantity)
      Swal.fire({
        icon: 'success',
        title: '數量已更新',
        showConfirmButton: false,
        timer: 1500
      })
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '更新數量失敗',
        text: error.message
      })
    }
  }
}

onMounted(async () => {
  try {
    await cartStore.fetchCart()
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '載入購物車失敗',
      text: error.message
    })
  }
})

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
                  <th scope="col" class="border-0 ps-0 text-primary-2">
                    商品資料
                  </th>
                  <th scope="col" class="border-0 text-primary-2">數量</th>
                  <th scope="col" class="border-0 text-primary-2">小計</th>
                  <th scope="col" class="border-0 text-primary-2"></th>
                </tr>
              </thead>
              <tbody>
                <template v-if="cartStore.items.length">
                <tr
                  v-for="item in cartStore.items"
                  :key="item.id"
                  class="border-bottom border-top"
                >
                  <th
                    scope="row"
                    class="border-0 px-0 font-weight-normal py-4 text-primary-2"
                  >
                    <img
                      :src="item.product.imageUrl"
                      alt=""
                      style="width: 72px; height: 72px; object-fit: cover"
                    />
                    <p class="mb-0 fw-bold ms-3 d-inline-block">
                      {{ item.product.title }}
                    </p>
                  </th>
                  <td class="border-0 align-middle" style="max-width: 160px">
                    <div class="input-group pe-5">
                      <div class="input-group-prepend">
                        <button
                          @click="updateQuantity(item.id, item.qty - 1)"
                          class="btn btn-white-primary-0 border-0 py-2"
                          type="button"
                        >
                          <font-awesome-icon :icon="['fas', 'minus']" />
                        </button>
                      </div>
                      <input
                        type="text"
                        class="form-control border-0 text-center my-auto shadow-none"
                        v-model="item.qty"
                      />
                      <div class="input-group-append">
                        <button
                          @click="updateQuantity(item.id, item.qty + 1)"
                          class="btn btn-white-primary-0 border-0 py-2"
                          type="button"
                        >
                          <font-awesome-icon :icon="['fas', 'plus']" />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="border-0 align-middle">
                    <p class="mb-0 ms-auto text-primary-2">
                      NT${{ item.final_total }}
                    </p>
                  </td>
                  <td class="border-0 align-middle">
                    <font-awesome-icon
                      @click="removeItem(item.id)"
                      :icon="['fas', 'times']"
                      class="btn btn-white-primary-0"
                    />
                  </td>
                </tr>
              </template>
              <tr v-else>
                  <td colspan="4" class="text-center py-5">
                    <p class="mb-0 text-primary-2 fs-4 fw-bold">購物車是空的，快來新增商品吧～</p>
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
                    <th
                      scope="row"
                      class="border-0 px-0 pt-4 font-weight-normal text-primary-2"
                    >
                      小計
                    </th>
                    <td class="text-end border-0 px-0 pt-4 text-primary-2">
                      NT${{ cartStore.totalAmount }}
                    </td>
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      class="border-0 px-0 pt-0 pb-4 font-weight-normal text-primary-2"
                    >
                      付款方式
                    </th>
                    <td class="text-end border-0 px-0 pt-0 pb-4 text-primary-2">
                      ApplePay
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-between mt-4">
                <p class="mb-0 h4 fw-bold">合計</p>
                <p class="mb-0 h4 fw-bold">NT${{ cartStore.totalAmount }}</p>
              </div>
              <router-link to="/checkout" class="btn btn-primary-2 w-100 mt-4"
                >送出訂單</router-link
              >
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
