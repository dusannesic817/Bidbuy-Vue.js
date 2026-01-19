<script setup>
import GuestSidebar from '@/components/GuestSidebar.vue';
import Navbar from '@/components/Navbar.vue';
import { RouterView } from 'vue-router';



</script>

<template>
    <Navbar />
    <div class="flex min-h-screen bg-gray-50">
    <GuestSidebar />
    <main class="flex-1 transition-all duration-300">
      <RouterView />
    </main>
  </div>
</template>