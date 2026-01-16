<script setup>
import { ref } from 'vue'
import Navbar from '@/components/Navbar.vue';
import Sidebar from '@/components/Sidebar.vue';
import { RouterView } from 'vue-router';
import { useUIStore } from '@/stores/ui'

const uiStore = useUIStore()

</script>

<template>
  <Navbar />
  <div class="flex min-h-screen bg-gray-50">
    <Sidebar v-show="uiStore.showSidebar" />
    <main class="flex-1 transition-all duration-300">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
