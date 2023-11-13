import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PageLoader from './mixins/PageLoader'
import store from './store'
import { createI18n } from "vue-i18n";
// import translations
import locales from "./locales";

// configure i18n
const i18n = createI18n(locales);

import '@/assets/css/style.css'

const app = createApp(App)
// createApp.mixin(PageLoader)


app.use(router)
app.use(store)
app.use(i18n);

app.mount('#app')
