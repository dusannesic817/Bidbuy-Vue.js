<script setup>
    import { RouterLink } from 'vue-router';
    import { ArchiveBoxIcon } from '@heroicons/vue/24/outline'
    import { ChatBubbleBottomCenterIcon } from '@heroicons/vue/24/outline'
    import { BriefcaseIcon } from '@heroicons/vue/24/outline'
    import { BellAlertIcon } from '@heroicons/vue/24/outline'
    import { HandThumbUpIcon } from '@heroicons/vue/24/outline'
    import { StarIcon } from '@heroicons/vue/24/outline'
    import { UserCircleIcon } from '@heroicons/vue/24/outline'
    import { CurrencyEuroIcon } from '@heroicons/vue/24/outline'
    
</script>

<template>
        <transition
        enter-active-class="transition-all duration-400 ease-out"
        leave-active-class="transition-all duration-400 ease-in"
        enter-from-class="opacity-0 -translate-x-full"
        enter-to-class="opacity-100 translate-x-0"
        leave-from-class="opacity-100 translate-x-0"
        leave-to-class="opacity-0 -translate-x-full"
    >
        <!-- Sidebar -->
        <aside class="w-48 bg-white shadow-lg p-4 transition-all overflow-hidden">
            <div class="flex items-center justify-between mb-2 text-gray-700 border-b pb-2 border-gray-300">
                <!-- Ikonica + ime + email -->
                <div class="flex items-center gap-2">
                    <div>
                        <h2 class="text-md font-semibold">Dusan Nesic</h2>
                        <p class="text-xs text-gray-500">dule95@cuplive.com</p>
                    </div>
                </div>
            </div>
            <ul class="space-y-1 border-b pb-2 border-gray-200 text-sm">
                <li>
                    <RouterLink to="#"
                        class="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-sky-50 transition bg-sky-100 text-sky-700 font-semibold">
                        <ArchiveBoxIcon class="w-5 h-5 text-sky-700 text-base" />
                        <span>My Auctions</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="#" class="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-sky-50 transition">                        
                        <BriefcaseIcon class="w-5 h-5 text-sky-700 text-base" />
                        <span class="text-gray-700 hover:text-sky-700 font-medium">My Bids</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="#" class="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-sky-50 transition">
                        <ChatBubbleBottomCenterIcon class="w-5 h-5 text-sky-700 text-base" />
                        <span class="text-gray-700 hover:text-sky-700 font-medium">Messages</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="#" class="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-sky-50 transition">
                        <BellAlertIcon class="w-5 h-5 text-sky-700 text-base" />
                        <span class="text-gray-700 hover:text-sky-700 font-medium">Notification</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="#" class="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-sky-50 transition">
                        <HandThumbUpIcon class="w-5 h-5 text-sky-700 text-base" />
                        <span class="text-gray-700 hover:text-sky-700 font-medium">Reviews</span>
                    </RouterLink>
                </li>

                <li>
                    <RouterLink to="#" class="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-sky-50 transition">
                        <StarIcon class="w-5 h-5 text-sky-700 text-base" />
                        <span class="text-gray-700 hover:text-sky-700 font-medium">Follow</span>
                    </RouterLink>
                </li>

            </ul>
            <div class="border-b pb-2 pt-2 border-gray-200 text-sm">
                <RouterLink to="#" class="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-sky-50 transition">
                    <UserCircleIcon class="w-5 h-5 text-sky-700 text-base" />
                    <span class="text-gray-700 hover:text-sky-700 font-medium">My Profile</span>
                </RouterLink>
            </div>
            <div class="flex items-center gap-3 px-2 py-4 rounded-md text-sm text-gray-700">                
                <CurrencyEuroIcon class="w-5 h-5 text-sky-700 text-base" />
                <span class="font-medium">Kurs: <span class="text-gray-800">118.22 RSD</span></span>
            </div>
        </aside>
        </transition>

</template>