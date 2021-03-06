import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '../views/AboutMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AboutMe
    },
    {
      path: '/gallery',
      name: '/gallery',
      component: () => import('../views/gallery.vue')
    },
    {
      path: '/test',
      name: '/test',
      component: () => import('../views/test.vue')
    }
  ]
})

export default router
