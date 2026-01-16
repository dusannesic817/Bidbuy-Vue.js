<script setup>
defineProps({
  count: {
    type: Number,
    default: 6
  }
})
</script>

<template>
  <div v-for="n in count" :key="n" class="h-64 rounded-2xl bg-white shadow-md p-4 animate-pulse">
    <div class="flex flex-col justify-between h-full">
      <div class="w-full h-32 bg-gray-200 rounded-lg mb-2"></div>
      <div class="h-4 bg-gray-200 rounded w-3/4"></div>
      <div class="space-y-1">
        <div class="h-3 bg-gray-200 rounded w-full"></div>
        <div class="h-3 bg-gray-200 rounded w-5/6"></div>
      </div>
      <div class="h-4 bg-gray-200 rounded w-1/3 self-end"></div>
    </div>
  </div>
</template>
