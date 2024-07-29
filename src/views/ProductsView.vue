<script setup>
import { ref, computed, watch, onMounted, nextTick } from 'vue'
import { useProducts } from '@/composables/useProducts'
import ProductCard from '@/components/ProductCard.vue'

const { products, loading, error, fetchProducts } = useProducts()

const currentPage = ref(1)
const itemsPerPage = 8
const categories = ref([])
const selectedCategory = ref('全部')

const totalPages = computed(() => {
  if (!Array.isArray(filteredProducts.value) || filteredProducts.value.length === 0) return 1
  return Math.max(1, Math.ceil(filteredProducts.value.length / itemsPerPage))
})

const displayedPages = computed(() => {
  const range = 2
  let start = Math.max(currentPage.value - range, 1)
  let end = Math.min(currentPage.value + range, totalPages.value)

  if (end - start + 1 < range * 2 + 1) {
    if (start === 1) {
      end = Math.min(start + range * 2, totalPages.value)
    } else {
      start = Math.max(end - range * 2, 1)
    }
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})

const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    nextTick(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }
}

const paginatedProducts = computed(() => {
  if (!Array.isArray(filteredProducts.value)) return []
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProducts.value.slice(start, end)
})

const fetchCategories = () => {
  if (Array.isArray(products.value)) {
    categories.value = ['全部', ...new Set(products.value.map(product => product.category))]
  }
}

const filteredProducts = computed(() => {
  if (selectedCategory.value === '全部') {
    return products.value
  }
  return products.value.filter(product => product.category === selectedCategory.value)
})

const selectCategory = (category) => {
  selectedCategory.value = category
  currentPage.value = 1
}

onMounted(async () => {
  try {
    await fetchProducts()
    fetchCategories()
    console.log('Products fetched:', products.value?.length)
  } catch (e) {
    console.error('Error fetching products:', e)
  }
})

watch(currentPage, (newPage) => {
  console.log('Current page changed to:', newPage)
})
</script>
<template>
  <BaseLayout
    :show-navbar="true"
    :show-footer="true"
    container-class="my-custom-container"
  >
    <div
      class="position-relative d-flex align-items-center justify-content-center"
      style="min-height: 400px"
    >
      <div
        class="position-absolute"
        style="
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-image: url('image/banner.png');
          background-position: 60% 60%;
          opacity: 0.1;
        "
      ></div>
      <h2 class="fw-bold text-primary-2">香水一覽</h2>
    </div>
    <div class="container mt-md-5 mt-3 mb-7 text-primary-2 lh-lg">
      <div class="row">
        <div class="col-md-4">
          <div
            class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
            id="accordionExample"
          >
            <div class="card border-0">
              <div
                class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
                id="headingOne"
              >
                <div
                  class="d-flex justify-content-between align-items-center pe-1"
                >
                  <h4 class="mb-0 text-primary-2 fw-bold">產品類別</h4>
                </div>
              </div>
              <div
                id="collapseOne"
                class="collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="card-body px-0 py-0">
                  <ul class="list-unstyled">
                    <li v-for="category in categories" :key="category">
                      <a
                        href="#"
                        class="py-2 px-2 d-block fs-5 fw-bold"
                        :class="{
                          'text-primary-0': selectedCategory === category,
                          'text-primary-2': selectedCategory !== category,
                        }"
                        @click.prevent="selectCategory(category)"
                      >
                        {{ category }}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-8">
          <div v-if="loading" class="mt-5 my-auto text-center">
            <h4 class="fw-bolder mb-5">Loading...</h4>
          </div>
          <div v-else-if="error">{{ error }}</div>
          <div v-else class="row">
            <div
              v-for="product in paginatedProducts"
              :key="product.id"
              class="col-md-6"
            >
              <ProductCard :product="product" />
            </div>
          </div>
          <nav v-if="totalPages > 1" class="d-flex justify-content-center">
            <ul class="pagination">
              <!-- 上一頁按鈕 -->
              <li class="page-item" :class="{ disabled: currentPage === 1 }">
                <a
                  class="page-link px-3"
                  href="#"
                  @click.prevent="changePage(currentPage - 1)"
                  aria-label="Previous"
                >
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>

              <!-- 頁碼 -->
              <li
                v-for="page in displayedPages"
                :key="page"
                class="page-item"
                :class="{ active: page === currentPage }"
              >
                <a
                  class="page-link px-3"
                  href="#"
                  @click.prevent="changePage(page)"
                  >{{ page }}</a
                >
              </li>

              <!-- 下一頁按鈕 -->
              <li
                class="page-item"
                :class="{ disabled: currentPage === totalPages }"
              >
                <a
                  class="page-link px-3"
                  href="#"
                  @click.prevent="changePage(currentPage + 1)"
                  aria-label="Next"
                >
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </BaseLayout>
</template>
<style scoped></style>
