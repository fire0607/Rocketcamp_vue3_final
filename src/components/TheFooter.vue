<script setup></script>
<template>
  <div>
    <div class="bg-primary-1 py-4">
      <div class="container">
        <div
          class="d-flex flex-column flex-md-row justify-content-between align-items-md-center align-items-start"
        >
          <p class="mb-0 fw-bold text-primary-2">留下您的mail，與我們聯繫</p>
          <div class="input-group w-md-50 mt-md-0 mt-3">
            <input
              type="text"
              class="form-control rounded-0 custom-input"
              placeholder=""
            />
            <div class="input-group-append">
              <button
                class="btn btn-primary-2 rounded-0"
                type="button"
                id="search"
              >
                送出
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary-2 py-5">
      <div class="container">
        <div
          class="d-flex align-items-center justify-content-between text-primary-1 mb-md-7 mb-4"
        >
          <router-link to="/" class="h4"
            ><h1>
              <img
                src="https://imgur.com/HV6rgTW.png"
                alt="清晨微光 Morning Dew"
                height="50px"
              /></h1
          ></router-link>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li>
              <a href="#" class="text-primary-1 mx-3"
                ><font-awesome-icon :icon="['fab', 'facebook']"
              /></a>
            </li>
            <li>
              <a href="#" class="text-primary-1 mx-3"
                ><font-awesome-icon :icon="['fab', 'instagram']"
              /></a>
            </li>
            <li>
              <a href="#" class="text-primary-1 ms-3"
                ><font-awesome-icon :icon="['fab', 'line']"
              /></a>
            </li>
          </ul>
        </div>
        <div
          class="d-flex flex-column flex-md-row justify-content-between align-items-md-end align-items-start text-primary-1"
        >
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div>
          <p class="mb-0">© 2024 Morning Dew All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped></style>
