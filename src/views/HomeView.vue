<script setup>
import api from '@/axois.js'
import { onMounted, ref, } from 'vue'
import { watch } from 'vue'
import { useRoute } from 'vue-router'
import AuctionsCard from '@/components/AuctionsCard.vue'
import AuctionCardSketleton from '@/components/skeleton/AuctionCardSketleton.vue'
import { NewspaperIcon } from '@heroicons/vue/24/outline'
import Categories from '@/components/Categories.vue'
import Card from '@/components/Card.vue'
import Section from '@/components/Section.vue'
import Pagination from '@/components/Pagination.vue'


const route = useRoute()
const auctions = ref([])
const categories = ref([])
const loading = ref(true)
const error = ref(null)
const skeletonAuctionsCount = ref(8)
const skeletonCategoriesCount = ref(22)

const pagination = ref({
  page: 1,
  lastPage: 1,
})
const fetchAuctions = async (page = 1) => {
  loading.value = true

  try {
    const params = {
      page,
      ...(route.query.q ? { q: route.query.q } : {})
    }

    const url = route.query.q
      ? '/auctions/search'
      : '/auctions'

    const res = await api.get(url, { params })

    auctions.value = res.data.data
    pagination.value.page = res.data.meta.current_page
    pagination.value.lastPage = res.data.meta.last_page

  } catch (err) {
    error.value = err.response?.data?.message || err.message
  } finally {
    loading.value = false
  }
}
watch(
  () => route.query.q,
  () => {
    fetchAuctions(1)
  }
)

const fetchCategories = async () => {
  try {
    const res = await api.get('/categories')
    categories.value = res.data
  } catch (err) {
    error.value = err.response?.data?.message || err.message
  }
}



onMounted(async () => {
  await Promise.all([
    fetchAuctions(),
    fetchCategories()
  ])
})


</script>

<template>
  <Section>
    <div class="flex flex-col lg:flex-row gap-x-4 gap-y-4">
      <!-- Kartica sa kategorijama -->
      <Card>
        <h3 class="border-b border-gray-300  pb-2 text-gray-700">Categories</h3>
        <ul v-if="loading" class="mt-4 space-y-2">
          <li v-for="n in skeletonCategoriesCount" :key="n" class="h-4 bg-gray-200 rounded animate-pulse mb-3"></li>
        </ul>
        <Categories v-for="category in categories" :key="category.id" :category="category" />
      </Card>

      <!-- Kartica sa oglasima -->
      <Card width="lg:w-4/5" class="space-y-2">
        <div class="flex flex-row items-start border-b border-gray-300">
          <NewspaperIcon class="w-6 h-6 text-sky-700 text-base me-2" />
          <h3 class="text-gray-700 pb-2">
            New Feeds
          </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <AuctionCardSketleton v-if="loading" :count="skeletonAuctionsCount" />
          <template v-else>
            <AuctionsCard v-for="auction in auctions" :key="auction.id" :auction="auction" :loading="loading" />
          </template>
        </div>
      </Card>
    </div>
  </Section>
  <!-- Paginacija na dnu -->
  <Pagination :current-page="pagination.page" :last-page="pagination.lastPage" @change="fetchAuctions" />


</template>
