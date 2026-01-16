<script setup>
defineProps({
  auction: {
    type: Object,
    required: true
  }
})
</script>
    <template>
            <a :href="`/auctions/${auction.id}`"
              class="block h-64  rounded-2xl bg-white shadow-md p-4 hover:shadow-lg transition">
              <div class="flex flex-col justify-between h-full">
                <img :src="auction.image" loading="lazy" :alt="auction.title"
                  class="w-full h-32 object-cover rounded-lg mb-2">
                <h3 class="text-sm font-semibold text-gray-800">{{ auction.title }}</h3>
                <p class="text-xs text-gray-500 line-clamp-2">{{ auction.short_description }}</p>
                <div class="text-right text-sky-700 font-bold text-sm mt-1">{{ auction.current_price }} RSD</div>
              </div>
            </a>
    </template>