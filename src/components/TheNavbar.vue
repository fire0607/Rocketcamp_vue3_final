<script setup></script>
<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/" class="navbar-brand">Navbar</router-link>
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
          <router-link to="/" class="nav-item nav-link me-4 active"
            >Home<span class="sr-only">(current)</span></router-link
          >
          <router-link to="/products" class="nav-item nav-link me-4"
            >Product</router-link
          >
          <router-link to="/products-detail" class="nav-item nav-link me-4"
            >Detail</router-link
          >
          <router-link to="/shopping-cart" class="nav-item nav-link"
            ><font-awesome-icon :icon="['fas', 'shopping-cart']"
          /></router-link>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped></style>
