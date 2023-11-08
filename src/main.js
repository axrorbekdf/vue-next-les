import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PageLoader from './mixins/PageLoader'

import '@/assets/css/style.css'

const app = createApp(App)
Vue.mixins(PageLoader)

app.use(router)

app.mount('#app')
