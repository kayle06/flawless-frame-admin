import { createWebHistory, createRouter } from 'vue-router'
import Index from '@/views/index/index.vue'

const routes = [
  {
    path: '/',
    component: Index,
    name: 'index',
    // redirect: '/index',
    // children: [
    //   {
    //     path: 'a1',
    //     component: a1,
    //     name: 'a1',
    //   },
    //   {
    //     path: 'home',
    //     component: HomeView,
    //     name: 'home',
    //   },
    // ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
