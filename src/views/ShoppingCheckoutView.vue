<script setup>
import { onMounted } from 'vue'
import { useCartStore } from '@/stores/cartStore'
import Swal from 'sweetalert2'

const cartStore = useCartStore()

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
          <router-link to="/" class="navbar-brand"
            ><h1>
              <img
                src="https://imgur.com/HV6rgTW.png"
                alt="清晨微光 Morning Dew"
                height="45px"
              /></h1
          ></router-link>
          <ul
            class="list-unstyled mb-0 ms-auto d-flex align-items-center justify-content-end flex-grow-1 mt-lg-0 mt-4"
          >
            <li class="me-lg-5 position-relative custom-step-line">
              <font-awesome-icon
                :icon="['fas', 'circle-check']"
                class="d-lg-inline d-block text-center"
              />
              <span class="text-nowrap">購物車</span>
            </li>
            <li class="me-lg-5 position-relative custom-step-line">
              <font-awesome-icon
                :icon="['fas', 'circle-check']"
                class="d-lg-inline d-block text-center ms-4"
              />
              <span class="text-nowrap">填寫資料</span>
            </li>
            <li>
              <font-awesome-icon
                :icon="['fas', 'circle-dot']"
                class="d-lg-inline d-block text-center ms-4"
              />
              <span class="text-nowrap">確認訂單</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-md-10">
        <h3 class="fw-bold mb-4 pt-3">填寫資料</h3>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <div class="col-md-4">
        <div class="border p-4 mb-4">
          <div
            v-for="item in cartStore.items"
            :key="item.id"
            class="d-flex mt-2"
          >
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
                <td class="text-end border-0 px-0 pt-4">
                  NT${{ cartStore.totalAmount }}
                </td>
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
        <form>
          <p>填寫您的個人資料</p>
          <div class="mb-0">
            <label for="ContactMail" class="text-muted mb-0">電子信箱</label>
            <input
              type="email"
              class="form-control"
              id="ContactMail"
              aria-describedby="emailHelp"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <p class="mt-4 fs-4 fw-bold">顧客資料</p>
          <div class="mb-2">
            <label for="ContactName" class="text-muted mb-0">顧客姓名</label>
            <input
              type="text"
              class="form-control"
              id="ContactName"
              placeholder="Carmen A. Rose"
              required
            />
          </div>
          <div class="mb-2">
            <label for="ContactPhone" class="text-muted mb-0">電話</label>
            <input
              type="text"
              class="form-control"
              id="ContactPhone"
              placeholder="09-123456789"
              required
            />
          </div>
          <div class="mb-2">
            <label for="ContactMessage" class="text-muted mb-0">訂單備註</label>
            <textarea
              class="form-control"
              rows="3"
              id="ContactMessage"
              placeholder="有什麼想告訴賣家的嗎? "
            ></textarea>
          </div>
        </form>
        <div
          class="d-flex flex-column-reverse flex-md-row mt-4 justify-content-between align-items-md-center align-items-end w-100"
        >
          <router-link to="/shopping-cart" class="text-dark mt-md-0 mt-3"
            ><font-awesome-icon :icon="['fas', 'chevron-left']" class="me-2" />
            返回購物車</router-link
          >
          <router-link to="/checkout2" class="btn btn-primary-2 py-2 px-3">
            下一步</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
