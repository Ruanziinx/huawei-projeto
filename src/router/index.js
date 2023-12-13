import { createRouter, createWebHistory } from 'vue-router'
import PageLogin from  '../views/PageLogin/PageLogin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageLogin
    },
  ]
})

export default router