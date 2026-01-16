import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuctionView from '@/views/AuctionView.vue'
import CategoryView from '@/views/CategoryView.vue'

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
    }

  ],
})

export default router
