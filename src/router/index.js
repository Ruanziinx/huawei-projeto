import { createRouter, createWebHistory } from 'vue-router'
import PageLogin from  '../views/PageLogin/PageLogin.vue'
import PageSignup from '../views/PageSignup/PageSignup.vue'
import PageSignupPassword from '../views/PageSignupPassword/PageSignupPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageLogin
    },
    {
      path: '/signup',
      name: 'signup',
      component: PageSignup
    },
    {
      path: '/signup-password',
      name: 'signup-password',
      component: PageSignupPassword
    }
  ]
})

export default router