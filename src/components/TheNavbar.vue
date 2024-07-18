<script setup></script>
<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light">
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
            ><font-awesome-icon :icon="['fas', 'shopping-cart']"
          /></a>
        </div>
      </div>
    </nav>
  </div>
</template>
<style scoped></style>
