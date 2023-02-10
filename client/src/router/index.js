import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import ListPage from '../views/ListPage.vue'
import FotoPage from '../views/FotoPage.vue'
import PhPage from '../views/PhPage.vue'
import FormCart from '../views/FormCart.vue'
import CartPage from '../views/CartPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage
    },
    {
      path: "/register",
      name: "registers",
      component: RegisterPage
    },
    {
      path: "/list",
      name: 'list',
      component: ListPage
    },
    {
      path: '/foto',
      name: 'foto',
      component: FotoPage
    },
    {
      path: "/ph",
      name: "ph",
      component: PhPage
    },
    {
      path: '/addcart',
      name: 'addcart',
      component: FormCart
    },
    {
      path: '/cart',
      name: "cart",
      component: CartPage
    }
  ]
})

export default router
