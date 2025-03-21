import type { App } from 'vue'
import { createPinia } from 'pinia'

export function initStore(app: App) {
  const store = createPinia()
  app.use(store)
}
