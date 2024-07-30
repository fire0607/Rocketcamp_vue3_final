<script setup>
defineProps({
  image: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="product-image col-md-7">
    <img :src="image" class="img-fluid" alt="Product image" />
  </div>
</template>
