<script setup>
import Breadcums from './Breadcums.vue';

defineProps({
    auction: {
        type: Object,
        required: true
    }
})

</script>

<template>
    <Breadcums />
    <!-- Slike proizvoda -->
    <div class="pt-10 flex flex-col lg:flex-row gap-4">
        <!-- Glavna slika -->
        <img id="mainImage" :src="auction.image" alt="Product Image" :class="[
            'h-[500px] rounded-2xl shadow-md object-cover',
            imagesLength > 1 ? 'w-full lg:w-3/4' : 'w-full'
        ]" />
        <!-- Male slike -->
        <div v-if="imagesLength > 1"
            class="w-full lg:w-1/4 flex flex-row lg:flex-col gap-2 overflow-y-auto max-h-[500px] px-2 pb-2">
            <img v-for="image in auction.images.images" :src="image"
                class="w-full h-32 rounded-2xl  cursor-pointer object-cover transition hover:ring-1 hover:ring-sky-700" />
        </div>

    </div>
    <div class="pt-10 flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">
        <!-- Leva strana: opis proizvoda -->
        <div class="lg:w-1/2 space-y-4">
            <h1 class="text-xl font-medium text-gray-800">
                {{ auction.title }}
            </h1>

            <!-- Statistika -->
            <div class="flex items-center space-x-2 pt-2 text-sm text-gray-500">
                <div class="flex items-center space-x-1 me-6">
                    <div class="text-red-500 font-bold text-2xl">{{ auction.current_price }} $</div>
                </div>
                <div class="flex items-center space-x-1">
                    <i class="fa-solid fa-eye text-sky-700"></i>
                    <span>124 views</span>
                </div>

                <div class="flex items-center space-x-1">
                    <i class="fa-solid fa-gavel text-sky-700"></i>
                    <span>8 offers</span>
                </div>
            </div>

            <p class="text-gray-600 text-sm leading-relaxed">
                {{ auction.short_description }}
            </p>
        </div>

        <!-- Desna strana: forma za ponudu -->
        <div class="lg:w-1/2">
            <form class="space-y-4">
                <h2 class="text-lg font-semibold text-gray-800 flex items-center">
                    <i class="fa-solid fa-gavel me-2 text-sky-700"></i>
                    Postavi svoju ponudu
                </h2>

                <!-- Unos cene -->
                <div>
                    <label for="bid" class="block text-sm text-gray-600 mb-1">
                        {{ auction.expiry_time }}left</label>
                    <input type="number" id="bid" name="bid"
                        class="w-full border border-indigo-500 rounded-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-sky-700"
                        placeholder="npr. 2500" min="1" required />
                </div>

                <!-- Dugme za slanje -->
                <button type="submit"
                    class="w-full bg-orange-300 text-white py-2 rounded-full hover:bg-orange-400 transition">
                    Pošalji ponudu
                </button>
            </form>
        </div>
    </div>
    <h3 class="mt-10 pb-1 border-b border-gray-300 w-1/6">Details:</h3>
    <p class="text-gray-500 mt-4">
        {{ auction.description }}
    </p>
</template>