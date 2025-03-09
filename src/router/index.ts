import { createWebHistory, createRouter } from 'vue-router'

import Layout from '@/components/Layout/MenuLeft/index.vue'
import a1 from '@/views/a1.vue'
import HomeView from '@/views/HomeView.vue'
const routes = [
  {
    path: '/',
    component: a1,
    name: 'home',
    redirect: '/a1',
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
