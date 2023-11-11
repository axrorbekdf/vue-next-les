import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PageLoader from './mixins/PageLoader'
import store from './store'
import { createI18n } from "vue-i18n";
// import translations
import de from "./locales/de.json";
import en from "./locales/en.json";

// configure i18n
const i18n = createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages: { de, en },
});

import '@/assets/css/style.css'

const app = createApp(App)
// createApp.mixin(PageLoader)


app.use(router)
app.use(store)
app.use(i18n);

app.mount('#app')
