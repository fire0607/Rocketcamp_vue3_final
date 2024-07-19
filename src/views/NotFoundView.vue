<script setup></script>
<template>
    <BaseLayout :show-navbar="true" :show-footer="true" container-class="my-custom-container">
        <div class="container">
            <div class="mt-7 justify-content-center">
                <h2>找不到頁面！</h2>
            </div>
            <router-link to="/Home" class="btn btn-dark rounded-0 mt-6 mb-6">回到首頁</router-link>
        </div>
        <div class="container"></div>
    </BaseLayout>
</template>
<style scoped>
</style>
