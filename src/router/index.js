import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/main/index.vue')
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/product/index.vue')
    },
  ]
})

export default router
