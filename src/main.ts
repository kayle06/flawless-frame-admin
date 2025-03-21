import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { initStore } from './store'                   // Store
import '@/style/reset.scss'                           // 重置样式
import zhCn from 'element-plus/es/locale/lang/zh-cn'



const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

initStore(app)
app.use(ElementPlus, {
  locale: zhCn,
})
app.use(router)
app.mount('#app')