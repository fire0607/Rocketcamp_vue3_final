import { createRouter, createWebHistory } from 'vue-router'
import { useCartStore } from '@/stores/cartStore'
import IndexPageView from '../views/IndexPageView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductsDetailView from '../views/ProductsDetailView.vue'
import ShoppingCartView from '../views/ShoppingCartView.vue'
import ShoppingCheckoutView from '../views/ShoppingCheckoutView.vue'
import ShoppingCheckout2View from '../views/ShoppingCheckout2View.vue'
import ShoppingCheckoutSuccessView from '../views/ShoppingCheckoutSuccessView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: IndexPageView
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView
  },
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductsDetailView
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: ShoppingCartView,
    beforeEnter: async (to, from, next) => {
      const cartStore = useCartStore()
      await cartStore.fetchCart()
      next()
    }
  },
  {
    path: '/checkout',
    name: 'ShoppingCheckout',
    component: ShoppingCheckoutView
  },
  {
    path: '/checkout2',
    name: 'ShoppingCheckout2',
    component: ShoppingCheckout2View
  },
  {
    path: '/success',
    name: 'ShoppingCheckoutSuccess',
    component: ShoppingCheckoutSuccessView
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior () {
    return { top: 0 }
  }
})

export default router
