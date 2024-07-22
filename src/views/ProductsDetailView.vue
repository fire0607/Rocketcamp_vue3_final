<script setup>
import SwiperSlider from '../components/SwiperSlider.vue'
</script>

<template>
  <BaseLayout
    :show-navbar="true"
    :show-footer="true"
    container-class="my-custom-container"
  >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-7">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="/image/product-1.png"
                  class="d-block w-100"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white px-0 mb-0 py-3">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-muted"
            >Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/products" class="text-muted"
            >Product</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">Detail</li>
            </ol>
          </nav>
          <h2 class="fw-bold h1 mb-1">晨曦微光</h2>
          <p class="mb-0 text-muted text-end"><del>NT$1,200</del></p>
          <p class="h4 fw-bold text-end">NT$1,080</p>
          <div class="row align-items-center">
            <div class="col-6">
              <div class="input-group my-3 bg-light rounded">
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
                  class="form-control border-0 text-center my-auto shadow-none bg-light"
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
            </div>
            <div class="col-6">
              <a
                href="./checkout.html"
                class="text-nowrap btn btn-dark w-100 py-2"
                >加入購物車</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-md-4">
          <p>
            捕捉清晨那一抹輕柔光芒，當橙花的清新香氣與檸檬草的淡雅芬芳交織在一起，仿佛在喚醒沉睡的大地。輕盈的白麝香如同晨曦中的薄霧，溫柔地包裹住一切。這支香水讓人彷彿置身於初升的陽光中，感受新一天的希望與能量。
          </p>
        </div>
        <div class="col-md-3">
          <p class="text-muted">香調： 橙花、檸檬草、輕盈的白麝香</p>
        </div>
      </div>
      <h3 class="fw-bold">其他人也看了...</h3>
      <SwiperSlider />
    </div>
  </BaseLayout>
</template>
<style lang="scss" scoped>
h2{
  font-weight: 600 !important;
  color: #433c36;
  word-break: break-word;
}
h4{
  font-weight: 600 !important;
  color: #433c36;
  word-break: break-word;
}
p{
  font-weight: 500 !important;
  line-height: 1.8;
  color: #433c36 !important;
  word-break: break-word;
}
.btn-dark{
  background-color: #d8c062;
  border: #d8c062;
  &:hover {
      background-color: rgba(216, 192, 98,0.7);
      transition: .3s;
    }
}
.input-group{
  background-color: #dce0c6 !important;
  input{
    background-color: rgb(220, 224, 198) !important;
    color:  #433c36;
    font-weight: 600;
  }
}
#button-addon1,#button-addon2{
  color:  #433c36 !important;
  &:hover{
    background-color: rgb(201, 203, 164);
    transition: .3s;
  }
}
</style>
