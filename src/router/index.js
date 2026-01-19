import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuctionView from '@/views/AuctionView.vue'
import CategoryView from '@/views/CategoryView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import RegisterView from '@/views/auth/RegisterView.vue'
import { useAuthStore } from '@/stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/auctions/:id',
      name: 'Auction',
      component: AuctionView,
    },
    {
      path: '/categories/:id',
      name: 'Category',
      component: CategoryView
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: { requiresGuest: true }
    },
    
  ]
})


router.beforeEach((to) => {
  const authStore = useAuthStore()

  if (to.meta.requiresGuest && authStore.lastState === 'auth') {
    return { name: 'Home' }
  }
  return true
})





export default router