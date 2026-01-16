<script setup>
defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  lastPage: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits(['change'])
</script>

<template>
    <section class="max-w-7xl mx-auto pt-4 px-6 pb-10">
  <div class="flex justify-end space-x-2">

    <!-- Previous -->
    <button
      v-if="currentPage > 1"
      @click="emit('change', currentPage - 1)"
      class="px-3 py-1 text-sky-700 hover:underline cursor-pointer"
    >
      Previous
    </button>

    <!-- Pages -->
    <button
      v-for="page in lastPage"
      :key="page"
      @click="emit('change', page)"
      class="px-3 py-1 rounded-full cursor-pointer"
      :class="page === currentPage
        ? 'bg-orange-300 text-white'
        : 'text-sky-700 hover:bg-gray-100'"
    >
      {{ page }}
    </button>

    <!-- Next -->
    <button
      v-if="currentPage < lastPage"
      @click="emit('change', currentPage + 1)"
      class="px-3 py-1 text-sky-700 hover:underline cursor-pointer"
    >
      Next
    </button>

  </div>
  </section>
</template>
