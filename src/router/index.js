import { createRouter, createWebHistory } from 'vue-router'
import IndexPageView from '../views/IndexPageView.vue'
import ProductsView from '../views/ProductsView.vue'
import ProductsDetailView from '../views/ProductsDetailView.vue'
import ShoppingCartView from '../views/ShoppingCartView.vue'
import ShoppingCheckoutView from '../views/ShoppingCheckoutView.vue'
import ShoppingCheckout2View from '../views/ShoppingCheckout2View.vue'
import ShoppingCheckoutSuccessView from '../views/ShoppingCheckoutSuccessView.vue'

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
    path: '/products-detail',
    name: 'ProductsDetail',
    component: ProductsDetailView
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: ShoppingCartView
  },
  {
    path: '/checkout',
    name: 'ShoppingCheckout',
    component: ShoppingCheckoutView,
    children: [{
      path: '/checkout2',
      name: 'ShoppingCheckout2',
      component: ShoppingCheckout2View
    },
    {
      path: '/success',
      name: 'ShoppingCheckoutSuccess',
      component: ShoppingCheckoutSuccessView
    }]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
