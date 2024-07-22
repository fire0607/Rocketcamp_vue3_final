<script setup>
import TheNavbar from '../components/TheNavbar.vue'
</script>

<template>
  <BaseLayout :show-navbar="false" :show-footer="true" container-class="my-custom-container">
  <div class="position-relative">
    <div
      class="position-absolute"
      style="
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-image: url('/public/image/banner.png');
        background-position: 60% 70%;
        opacity: 0.1;
        pointer-events: none;
      "
    ></div>
    <div class="container d-flex flex-column" style="min-height: 100vh">
      <TheNavbar />
      <div class="row justify-content-center my-auto">
        <div class="col-md-4 text-center">
          <h2>清晨微光 Morning Dew</h2>
          <p class="text-muted mb-0">
            清晨微光的每一瓶香水，都像是一個迷人的清晨，<br>帶著自然的清新和希望。
          </p>
          <router-link to="/products" class="btn btn-dark rounded-0 mt-4">了解更多</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-4 mt-md-4">
        <div class="card border-0 mb-4">
          <img
            src="/image/product-1.png"
            class="card-img-top rounded-0"
            alt="..."
          />
          <div class="card-body text-center">
            <h4>清晨鳥啼</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">
                早春的清新薄荷、花梨木、晨露滴落的綠茶葉
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-md-4">
        <div class="card border-0 mb-4">
          <img
            src="/image/product-2.png"
            class="card-img-top rounded-0"
            alt="..."
          />
          <div class="card-body text-center">
            <h4>初曉花園</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">
                清晨的玫瑰花瓣、繡球花、些許的青草香
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 mt-md-4">
        <div class="card border-0 mb-4">
          <img
            src="/image/product-3.png"
            class="card-img-top rounded-0"
            alt="..."
          />
          <div class="card-body text-center">
            <h4>薄霧森林</h4>
            <div class="d-flex justify-content-between">
              <p class="card-text text-muted mb-0">
                杉木、柏樹、輕霧中的白蘭地
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-light mt-7">
    <div class="container">
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row justify-content-center py-7">
              <div class="col-md-6 text-center">
                <h3>微光晨曦，綻放自然之美</h3>
                <p class="my-5">
                  品牌專注於使用純淨的自然材料，<br>為都會女性創造一種純粹而輕盈的香氣，<br>讓您在繁忙的生活中找到一絲寧靜與舒適。
                </p>
                <p><small>— Dawn's gentle light, unveiling the beauty of nature. —</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-7">
    <div class="row">
      <div class="col-md-6">
        <img
          src="/image/main-product.png"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">晨曦微光</h4>
        <p class="text-muted">
          捕捉清晨那一抹輕柔光芒，<br>當橙花的清新香氣與檸檬草的淡雅芬芳交織在一起，<br>仿佛在喚醒沉睡的大地。<br>輕盈的白麝香如同晨曦中的薄霧，<br>溫柔地包裹住一切。<br>這支香水讓人彷彿置身於初升的陽光中，<br>感受新一天的希望與能量。
        </p>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-between mt-4">
      <div class="col-md-6">
        <img
          src="/image/main-product-2.png"
          alt=""
          class="img-fluid"
        />
      </div>
      <div class="col-md-4 m-auto text-center">
        <h4 class="mt-4">晨風綠意</h4>
        <p class="text-muted">
          將清晨的清新氣息封存於瓶中。<br>綠茶的淡雅與百里香的清爽相互輝映，<br>帶來一絲綠意盎然的感覺，<br>早晨雨後松木的淡淡香氣彷彿喚起在森林中散步的愜意。<br>這支香水讓人如同置身於清晨的森林中，<br>呼吸著雨後的清新空氣，<br>享受片刻的平靜與悠然。
        </p>
      </div>
    </div>
  </div>
  </BaseLayout>
</template>

<style lang="scss" scoped>
h2{
  font-weight: 600 !important;
  color: #433c36;
  word-break: break-word;
}
h3{
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
.btn{
  background-color: #d8c062;
  border: #d8c062;
}
.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-text {
  width: 100%;
  text-align: center;
}
.bg-light{
  background-color: #dce0c6 !important;
}

</style>
