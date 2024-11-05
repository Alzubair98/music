import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import ManageView from '@/views/ManageView.vue'

const routes = [
  {
    name: 'home',
    path: '/',
    component: HomeView,
  },
  {
    name: 'about',
    // alias: '/about',
    path: '/about-music',
    component: AboutView,
  },
  {
    path: '/about',
    redirect: { name: 'about' },
  },
  {
    path: '/:catchAll(.*)*',
    redirect: { name: 'home' },
  },
  {
    name: 'manage',
    path: '/manage',
    component: ManageView,
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkExactActiveClass: 'text-yellow-500',
})

// router.beforeEach((to, from, next) => {
//   next()
// })

export default router
