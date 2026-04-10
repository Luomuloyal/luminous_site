import { createApp } from 'vue'
import Tres from '@tresjs/core'
import './style.css'
import App from './App.vue'
import router from './router'

// 性能优化：禁用不必要的3D功能在低端设备
const isLowEndDevice = () => {
  if (navigator.deviceMemory && navigator.deviceMemory < 4) return true
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) return true
  return false
}

const app = createApp(App)

app.use(router)

// 只在非低端设备上使用3D库
if (!isLowEndDevice()) {
  app.use(Tres)
}

app.mount('#app')
