<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const searchQuery = ref(route.query.q || '')

const submitSearch = () => {
  const q = searchQuery.value.trim()

  router.push({
    path: '/',
    query: q ? { q } : {}
  })
}
</script>

<template>
    <nav
        class="bg-gradient-to-r from-orange-100 via-orange-200 to-yellow-100 border-b border-yellow-200 px-4 py-4 shadow-sm">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <div>
                <button onclick="toggleSidebar()" class="text-indigo-900 hover:text-sky-700 text-xl me-2">
                    <i class="fa-solid fa-bars"></i>
                </button>
                <RouterLink to="/" class="text-2xl font-bold text-indigo-900">BidBuy</RouterLink>
            </div>

            <!-- Search Bar visible only on md and up -->
            <div class="hidden md:block w-full max-w-lg">
                <form @submit.prevent="submitSearch" class="relative">
                    <input v-model="searchQuery" type="text" placeholder="Search"
                        class="w-full border border-indigo-500 rounded-full py-2 pl-4 pr-10" />
                    <button type="submit" class="absolute right-2 top-1/2 -translate-y-1/2 text-sky-700">
                        🔍
                    </button>
                </form>
            </div>

            <!-- CTA Button -->
            <div class="hidden md:block">
                <RouterLink to="#"
                    class="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition">Post
                    a
                    Bid</RouterLink>
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden">
                <button id="menu-toggle" class="text-gray-700 focus:outline-none">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"
                        stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>


        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden mt-3 space-y-2 hidden">

            <!-- Search Bar visible only on mobile -->
            <form @submit.prevent="submitSearch" class="relative">
  <input
    v-model="searchQuery"
    type="text"
    placeholder="Search"
    class="w-full border border-indigo-500 rounded-full py-2 pl-4 pr-10"
  />
  <button
    type="submit"
    class="absolute right-2 top-1/2 -translate-y-1/2 text-sky-700"
  >
    🔍
  </button>
</form>

            <RouterLink to="#" class="block bg-sky-700 text-white text-center px-4 py-2 rounded-full mx-2 mt-2">Post
                RouterLink Bid</RouterLink>


        </div>
    </nav>
</template>