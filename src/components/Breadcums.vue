<script setup>

</script>

<template>
         <!--Breadcrumbs and actions-->
                <div class="flex flex-col lg:flex-row justify-between items-center">
                    <!-- Breadcrumbs -->
                    <nav class="text-sm text-gray-600 flex items-center space-x-2" aria-label="Breadcrumb">
                        <a href="/" class="text-sky-700 hover:underline flex items-center">
                            <i class="fa-solid fa-house me-1"></i> Home
                        </a>
                        <span>/</span>
                        <a href="/categories" class="text-sky-700 hover:underline">Categories</a>
                        <span>/</span>
                        <a href="/kategorije/automobili" class="text-sky-700 hover:underline font-medium">Automobili</a>
                    </nav>

                    <!-- Desna strana -->
                    <div class="flex flex-col lg:flex-row items-center space-x-4">
                        <div class="cursor-pointer flex items-center">
                            <i class="fa-regular fa-bookmark me-1 text-yellow-400 hover:bg-yellow-400 text-lg"></i>
                            Follow
                        </div>

                        <div class="cursor-pointer flex items-center">
                            <i class="fa-solid fa-share me-1 text-sky-700 text-lg"></i>Share
                        </div>
                    </div>
                </div>
</template>