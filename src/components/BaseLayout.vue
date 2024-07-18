<script setup>
import { defineProps } from 'vue'
import TheNavbar from '../components/TheNavbar.vue'
import TheFooter from '../components/TheFooter.vue'

// eslint-disable-next-line no-unused-vars
const props = defineProps({
  containerClass: {
    type: String,
    default: 'container'
  },
  showNavbar: {
    type: Boolean,
    default: true
  },
  showFooter: {
    type: Boolean,
    default: true
  }
})

</script>
<template>
  <div>
    <TheNavbar v-if="showNavbar" />
    <slot></slot>
    <TheFooter v-if="showFooter" />
  </div>
</template>
<style scoped>
</style>
