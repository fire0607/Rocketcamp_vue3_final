<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<template>
      <div class="card border-0 mb-4 position-relative position-relative">
        <img
          :src="product.imageUrl"
          class="card-img-top rounded-0"
          :alt="product.title"
        />
        <a href="#" class="text-dark">
          <font-awesome-icon
            :icon="['far', 'heart']"
            class="position-absolute"
            style="right: 16px; top: 16px"
          />
        </a>
        <div class="card-body p-0">
          <h4 class="mb-0 mt-3">
            <router-link
              :to="`/products-detail/${product.id}`"
              class="text-primary-2 fw-bold"
            >
              {{ product.title }}
            </router-link>
          </h4>
          <p class="card-text mb-0 text-primary-2">
            NT${{ product.price }}
            <span class="text-primary-2">
              <del>NT${{ product.origin_price }}</del>
            </span>
          </p>
          <p class="text-primary-2 mt-1">{{ product.category }}</p>
        </div>
      </div>
</template>
