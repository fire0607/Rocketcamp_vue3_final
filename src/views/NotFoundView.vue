<script setup></script>
<template>
    <BaseLayout :show-navbar="true" :show-footer="true" container-class="my-custom-container">
        <div class="container">
            <div class="row justify-content-center my-auto">
                <div class="mt-7 col-md-4 text-center">
                    <h2 class="fw-bolder">找不到頁面</h2>
                    <router-link to="/" class="btn btn-dark rounded-0 mt-6 mb-6"><font-awesome-icon :icon="['fas', 'chevron-left']" class="me-2"/>回到首頁</router-link>
                </div>
            </div>
        </div>
    </BaseLayout>
</template>
<style scoped>
</style>
