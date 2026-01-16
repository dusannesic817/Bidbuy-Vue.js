<script setup>

import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';
import Sidebar from './components/Sidebar.vue';

</script>

<template>
  <Navbar />
  <div class="flex min-h-screen bg-gray-50">
    <Sidebar />
    <main class="flex-1 transition-all duration-300">
      <RouterView />
    </main>
  </div>
</template>


<style scoped></style>
