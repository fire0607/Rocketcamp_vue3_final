<script setup></script>
<template>
  <BaseLayout
    :show-navbar="true"
    :show-footer="true"
    container-class="my-custom-container"
  >
    <!-- <div class="container">
            <div class="row justify-content-center my-auto mt-5">
                <div class="mt-5 col-md-4 text-center">
                    <h2 class="fw-bolder mb-5">找不到頁面</h2>
                    <router-link to="/" class="btn btn-primary-2 rounded-0 mt-6 mb-5"><font-awesome-icon :icon="['fas', 'chevron-left']" class="me-2"/>回到首頁</router-link>
                </div>
            </div>
        </div> -->
    <div class="position-relative">
      <div
        class="position-absolute"
        style="
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-image: url('https://imgur.com/13gsyOU.png');
          background-repeat: no-repeat;
          background-size: 100%;
          background-position: 50% 50%;
          opacity: 0.1;
          pointer-events: none;
        "
      ></div>
      <div class="container d-flex flex-column" style="min-height: 100vh">
        <div class="row justify-content-center my-auto">
            <div class="mt-5 col-md-4 text-center">
                    <h2 class="fw-bolder mb-5">找不到頁面</h2>
                    <router-link to="/" class="btn btn-primary-2 rounded-0 mt-6 mb-5"><font-awesome-icon :icon="['fas', 'chevron-left']" class="me-2"/>回到首頁</router-link>
                </div>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
<style scoped></style>
