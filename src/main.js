import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '@/assets/scss/main.scss'

import Vue3EasyDataTable from 'vue3-easy-data-table'
import 'vue3-easy-data-table/dist/style.css'

const app = createApp(App)
const pinia = createPinia()

app.component('EasyDataTable', Vue3EasyDataTable)

app.use(router)
app.use(pinia)
app.mount('#app')
