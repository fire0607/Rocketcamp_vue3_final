<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import Swal from 'sweetalert2'

const cartStore = useCartStore()
const router = useRouter()

const handleCheckout = async () => {
  try {
    await cartStore.submitOrder()
    await cartStore.clearCart()
    router.push('/success')
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: '訂單提交失敗',
      text: error.message
    })
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
  <div class="container text-primary-2">
    <div class="row justify-content-center">
      <div class="col-md-10">
        <nav class="navbar navbar-expand-lg navbar-light px-0">
          <router-link to="/" class="navbar-brand"><h1>
              <img
                src="/image/morning-dew-high-resolution-logo-transparent.png"
                alt="清晨微光 Morning Dew"
                height="45px"
              /></h1
          ></router-link>
          <ul
            class="list-unstyled mb-0 ms-md-auto d-flex align-items-center justify-content-between justify-content-md-end w-100 mt-md-0 mt-4"
          >
            <li class="me-lg-5 position-relative custom-step-line">
              <font-awesome-icon :icon="['fas', 'circle-check']" class="d-md-inline d-block text-center" />
              <span class="text-nowrap">購物車</span>
            </li>
            <li class="me-lg-5 position-relative custom-step-line">
              <font-awesome-icon :icon="['fas', 'circle-check']" class="d-md-inline d-block text-center ms-4" />
              <span class="text-nowrap">填寫資料</span>
            </li>
            <li>
              <font-awesome-icon :icon="['fas', 'circle-dot']" class="d-md-inline d-block text-center ms-4" />
              <span class="text-nowrap">確認訂單</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <h3 class="fw-bold mb-4 pt-3">確認訂單</h3>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <div class="col-md-4">
        <div class="border p-4 mb-4">
          <div v-for="item in cartStore.items"
          :key="item.id" class="d-flex mt-2">
            <img
              :src="item.product.imageUrl"
              alt=""
              class="me-2"
              style="width: 48px; height: 48px; object-fit: cover"
            />
            <div class="w-100">
              <div class="d-flex justify-content-between">
                <p class="mb-0 fw-bold">{{ item.product.title }}</p>
                <p class="mb-0">NT${{ item.final_total }}</p>
              </div>
              <p class="mb-0 fw-bold">x{{ item.qty }}</p>
            </div>
          </div>
          <table class="table mt-4 border-top border-bottom text-muted">
            <tbody>
              <tr>
                <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">
                  小計
                </th>
                <td class="text-end border-0 px-0 pt-4">NT${{ cartStore.totalAmount }}</td>
              </tr>
              <tr>
                <th
                  scope="row"
                  class="border-0 px-0 pt-0 pb-4 font-weight-normal"
                >
                  付款方式
                </th>
                <td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td>
              </tr>
            </tbody>
          </table>
          <div class="d-flex justify-content-between mt-4">
            <p class="mb-0 h4 fw-bold">合計</p>
            <p class="mb-0 h4 fw-bold">NT${{ cartStore.totalAmount }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="accordion" id="accordionExample">
          <div class="card rounded-0">
            <div
              class="card-header bg-white border-0 py-3"
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p class="mb-0 position-relative custom-checkout-label fw-bolder">
                宅配
              </p>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body bg-primary-1 ps-5 py-4">
                <div class="mb-2">
                  <label for="Lorem ipsum1" class="text-muted mb-0"
                    >輸入宅配地址</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="Lorem ipsum1"
                    placeholder="高雄市..."
                  />
                </div>
                <div class="mb-0">
                  <label for="Lorem ipsum2" class="text-muted mb-0"
                    >備註</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="Lorem ipsum2"
                    placeholder="指定配送時間、需求等"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="card rounded-0">
            <div
              class="card-header bg-white border-0 py-3 collapsed"
              id="headingTwo"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="true"
              aria-controls="collapseTwo"
            >
              <p class="mb-0 position-relative custom-checkout-label fw-bolder">
                超商取貨
              </p>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body bg-primary-1 ps-5 py-4">
                <div class="mb-2">
                  <label for="Lorem ipsum1" class="text-muted mb-0"
                    >輸入取貨超商</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="Lorem ipsum1"
                    placeholder="7-11 火箭門市"
                  />
                </div>
                <div class="mb-0">
                  <label for="Lorem ipsum2" class="text-muted mb-0"
                    >備註</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="Lorem ipsum2"
                    placeholder="指定配送時間、需求等"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="card rounded-0">
            <div
              class="card-header bg-white border-0 py-3 collapsed"
              id="headingThree"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="true"
              aria-controls="collapseThree"
            >
              <p class="mb-0 position-relative custom-checkout-label fw-bolder">
                來店自取
              </p>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body bg-primary-1 ps-5 py-4">
                <div class="mb-2">
                  <label for="Lorem ipsum1" class="text-muted mb-0"
                    >輸入取貨門市</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="Lorem ipsum1"
                    placeholder="民生店、左營店..."
                  />
                </div>
                <div class="mb-0">
                  <label for="Lorem ipsum2" class="text-muted mb-0"
                    >備註</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="Lorem ipsum2"
                    placeholder="指定配送時間、需求等"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100"
        >
        <router-link to="/shopping-cart" class="text-dark mt-md-0 mt-3"><font-awesome-icon :icon="['fas', 'chevron-left']" class="me-2"/> 返回購物車</router-link>
        <button @click="handleCheckout" class="btn btn-primary-2 py-2 px-3">下一步</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
