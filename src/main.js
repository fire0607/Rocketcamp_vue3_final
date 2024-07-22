import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import BaseLayout from './components/BaseLayout.vue'

import './assets/all.scss'
import 'bootstrap'
import IconLoader from './components/IconLoader.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'swiper/css'

const app = createApp(App)
app.component('IconLoader', IconLoader)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('BaseLayout', BaseLayout)

app.use(createPinia())
app.use(router)

app.mount('#app')
