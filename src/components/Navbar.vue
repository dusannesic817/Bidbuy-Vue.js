<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useUIStore } from '@/stores/ui'
import { useAuthStore } from '@/stores/auth'
import { MagnifyingGlassCircleIcon, PlusIcon } from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/16/solid'

const uiStore = useUIStore()
const authStore = useAuthStore()

const router = useRouter()
const route = useRoute()
const showMobileMenu = ref(false);

const searchQuery = ref(route.query.q || '')

const submitSearch = () => {
    const q = searchQuery.value.trim()

    router.push({
        path: '/',
        query: q ? { q } : {}
    })
}

const handleLogout = async () => {
    const result = await authStore.logout()
    if (result.success) {
        router.push('/login')
    }
}
</script>

<template>
    <nav
        class="bg-gradient-to-r from-orange-100 via-orange-200 to-yellow-100 border-b border-yellow-200 px-4 py-4 shadow-sm">
        <div class="max-w-7xl mx-auto flex items-center justify-between">
            <div class="flex items-center space-x-2">
                <button @click="uiStore.toggleSidebar" class="text-indigo-900 hover:text-sky-700 text-xl">
                    <svg class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <RouterLink to="/" class="text-2xl font-bold text-indigo-900">BidBuy</RouterLink>
            </div>


            <!-- Desktop search -->
            <div class="hidden md:block w-full max-w-lg">
                <form @submit.prevent="submitSearch" class="relative">
                    <input v-model="searchQuery" type="text" placeholder="Search"
                        class="w-full border border-indigo-500 rounded-full py-2 pl-4 pr-10" />
                    <button type="submit" class="absolute right-2 top-1/2 -translate-y-1/2 text-sky-700"><MagnifyingGlassIcon class="w-6 h-6"/></button>
                </form>
            </div>

            <!-- CTA button -->
            <div class="hidden md:flex items-center space-x-4">
                <RouterLink to="#"
                    class="bg-orange-400 text-white px-4 py-2 rounded-full hover:bg-orange-500 transition flex items-center gap-1">
                    <PlusIcon class="w-5 h-5"/>
                    Post a Bid
                </RouterLink>
                
            </div>

            <!-- Mobile menu toggle -->
            <div class="md:hidden">
                <button @click="uiStore.toggleNavbarMenu" class="text-gray-700 focus:outline-none">
                    <svg class="w-6 h-6 cursor-pointer" fill="none" stroke="currentColor" stroke-width="2"
                        viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile menu -->
        <div v-show="uiStore.openNavbarMenu" class="md:hidden mt-3 space-y-2">
            <form @submit.prevent="submitSearch" class="relative">
                <input v-model="searchQuery" type="text" placeholder="Search"
                    class="w-full border border-indigo-500 rounded-full py-2 pl-4 pr-10" />
                <button type="submit" class="absolute right-2 top-1/2 -translate-y-1/2 text-sky-700"><MagnifyingGlassIcon class="w-6 h-6"/></button>
            </form>

            <RouterLink to="#" class="block bg-sky-700 text-white text-center px-4 py-2 rounded-full mx-2 mt-2">Post a
                Bid</RouterLink>

            <div v-if="authStore.isAuthenticated" class="mx-2 mt-2">
                <p class="text-indigo-900 font-medium text-center mb-2">{{ authStore.user?.name }}</p>
                <button @click="handleLogout"
                    class="w-full bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition">
                    Logout
                </button>
            </div>
        </div>
    </nav>

</template>