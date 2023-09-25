import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import ccui from '../../packages/cc-ui/lib/index'
import '../../packages/cc-ui/lib/index.css'

createApp(App).use(ccui).mount('#app')
