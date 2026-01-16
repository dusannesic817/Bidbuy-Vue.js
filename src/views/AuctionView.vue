<script setup>
import api from '@/axois.js'
import Card from '@/components/Card.vue'
import { onMounted, ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { HandThumbUpIcon } from '@heroicons/vue/24/outline'
import { HandThumbDownIcon } from '@heroicons/vue/16/solid'
import { ArchiveBoxIcon } from '@heroicons/vue/24/outline'
import { UserCircleIcon } from '@heroicons/vue/24/outline'
import { ChatBubbleBottomCenterIcon } from '@heroicons/vue/24/outline'
import AuctionCard from '@/components/AuctionCard.vue'
import Section from '@/components/Section.vue'

const route = useRoute()

const auction = ref(null)
const loading = ref(true)
const reviews = ref(null)
const error = ref(null)



const fetchReviews = async (userId) => {
    try {
        const res = await api.get(`/users/${userId}/reviews`)
        reviews.value = res.data.data ?? res.data

    } catch {
        console.error('User fetch failed', err)

    }
}
onMounted(async () => {
    loading.value = true
    try {
        const res = await api.get(`/auctions/${route.params.id}`)

        const data = res.data.data ?? res.data

        if (typeof data.images?.images === 'string') {
            data.images.images = [data.images.images]
        }

        if (!Array.isArray(data.images?.images)) {
            data.images = { images: [] }
        }

        if (data.user?.id) {
            await fetchReviews(data.user.id)
        }

        auction.value = data

    } catch (err) {
        error.value = err.response?.data?.message || err.message
    } finally {
        loading.value = false
    }
})

const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }).format(new Date(date))
}


const imagesLength = computed(() => auction.value?.images?.images?.length ?? 0)


</script>

<template>
    <Section v-if="loading">
        <!-- ovde skeleton / loader -->
        Loading auction...
    </Section>

    <Section v-else>
        {{ imagesLength }}
        <div class="flex flex-col lg:flex-row gap-x-4 gap-y-4">
            <Card width="lg:w-3/4" p="p-6">
               <AuctionCard :auction="auction"/>
            </Card>

            <!-- Kartica sa informacijama -->
            <Card width="lg:w-1/4" class="h-72 sticky top-4">
                <h3 class="border-b border-gray-300 pb-2 text-gray-700 flex items-center space-x-2">
                    <UserCircleIcon class="w-8 h-8 text-sky-700" />
                    <span class="font-semibold">Profile</span>
                </h3>

                <div class="space-y-1 pt-2">
                    <p class="text-gray-700">
                        {{ auction.user.name }}
                        <span class="text-sm text-gray-500">({{ auction.user.username }})</span>
                    </p>
                    <p class="text-gray-700">
                        Member from:
                        <span class="text-sm text-gray-500">{{ formatDate(auction.user.created_at) }}</span>
                    </p>
                    <p class="text-gray-700">Reviews:</p>
                    <div class="py-2 flex items-center gap-4">
                        <div class="flex items-center gap-2 text-green-700">
                            <HandThumbUpIcon class="w-5 h-5" />
                            <span class="text-sm font-medium">{{ auction.positive_reviews }}</span>
                        </div>

                        <div class="flex items-center gap-2 text-red-700">
                            <HandThumbDownIcon class="w-5 h-5" />
                            <span class="text-sm font-medium">{{ auction.negative_reviews }}</span>
                        </div>
                    </div>

                    <a href=""
                        class="block w-full border border-sky-700 text-gray-700 rounded-full py-2 px-4 text-center hover:bg-sky-100 transition">
                        <div class="flex items-center justify-center gap-2">
                            <ArchiveBoxIcon class="w-5 h-5 text-sky-700 " />
                            <span>All Products</span>
                        </div>
                    </a>

                    <a href=""
                        class="block w-full border border-yellow-500 text-gray-700 rounded-full py-2 px-4 text-center hover:bg-yellow-50 transition">
                        <div class="flex items-center justify-center gap-2">
                            <ChatBubbleBottomCenterIcon class="w-5 h-5 text-yellow-500" />
                            <span>Send Message</span>
                        </div>
                    </a>

                </div>
            </Card>
        </div>
    </Section>

    <!--Reviews-->
    <section>
        <div class="max-w-7xl mx-auto px-6 mt-10 mb-20">
            <h2 class="text-xl font-medium text-gray-800 mb-6 border-b border-gray-300 pb-2">
                Reviews
            </h2>
            <div class="space-y-4">
                <!-- Review 1 -->
                <div v-for="review in reviews" class="rounded-2xl bg-white p-4 border-gray-500 shadow-md space-y-1">
                    <div class="flex items-center mb-1">
                        <div class="flex flex-row">

                            <span v-if="review.mark == 0" class="me-2">
                                <HandThumbDownIcon class="w-5 h-5 text-red-700 text-base" />
                            </span>
                            <span v-else class="me-2">
                                <HandThumbUpIcon class="w-5 h-5 text-green-700 text-base" />
                            </span>
                            <h3 class="font-semibold text-gray-800">{{ review.reviewer.name }}</h3>
                        </div>
                    </div>
                    <div class="text-gray-700 text-sm">
                        {{ review.auction.name }}
                    </div>
                    <div class="text-sm text-gray-500">
                        <div class="text-sm text-gray-500">{{ formatDate(review.created_at) }}</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>