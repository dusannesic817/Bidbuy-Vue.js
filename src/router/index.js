import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuctionView from '@/views/AuctionView.vue'
import CategoryView from '@/views/CategoryView.vue'
import LoginView from '@/views/auth/LoginView.vue'
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
      name : "Auction",
      component: AuctionView
    },
    {
      path: '/categories/:id',
      name : "Category",
      component: CategoryView
    },
   {
      path: '/login',
      name: 'Login',
      component: LoginView,
      meta: { requiresGuest: true }
   }

  ],
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  
  authStore.clearErrors()
  if (!authStore.user && !authStore.loading) {
    await authStore.fetchUser()
  }
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } 
  else if (to.meta.requiresGuest && authStore.isAuthenticated) {
    next('/') 
  } 
  else {
    next()
  }
})


export default router
