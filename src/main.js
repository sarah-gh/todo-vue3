import { createApp, ref } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@/assets/scss/main.scss'

const isDarkMode = ref(false)

const toggleTheme = () => {
  isDarkMode.value = !isDarkMode.value
}

const app = createApp(App)
const pinia = createPinia()

app.provide('isDarkMode', isDarkMode)
app.provide('toggleTheme', toggleTheme)
app.use(router)
app.use(pinia)
app.mount('#app')
