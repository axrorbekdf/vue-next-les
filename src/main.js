import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PageLoader from './mixins/PageLoader'
import store from './store'

import '@/assets/css/style.css'

const app = createApp(App)
// createApp.mixin(PageLoader)

app.use(router)
app.use(store)

app.mount('#app')
