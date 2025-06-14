import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import { createPinia } from "pinia";
import "normalize.css"
import "./assets/css/index.less"

createApp(App).use(router).use(createPinia()).mount('#app')
