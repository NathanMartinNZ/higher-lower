import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import { globalStore } from './stores/global.js' 

const app = createApp(App)
app.use(globalStore)
app.mount('#app')