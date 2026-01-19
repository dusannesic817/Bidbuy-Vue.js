<script setup>
import { ref,onMounted } from 'vue'
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import GuestSidebar from './components/GuestSidebar.vue';
import { RouterView } from 'vue-router';
import { useUIStore } from '@/stores/ui'
import { useAuthStore } from './stores/auth';

const uiStore = useUIStore()
const authStore = useAuthStore();

onMounted(() => {
  authStore.bootstrap()
})

</script>
<template>
  <Navbar />

  <div class="flex min-h-screen bg-gray-50">
    <Sidebar
      v-if="authStore.shouldShowAuthUI"
      v-show="uiStore.showSidebar"
    />
    <GuestSidebar
      v-else
    />
    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>



<style scoped></style>
