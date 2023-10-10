import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ccui from 'mouse-cc-ui'
import '@cc-ui/theme-chalk/src/index.scss'

createApp(App).use(ccui).mount('#app')
