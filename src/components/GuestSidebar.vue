<script setup>
import { RouterLink } from 'vue-router';
import { ArchiveBoxIcon } from '@heroicons/vue/24/outline'
import { ChatBubbleBottomCenterIcon } from '@heroicons/vue/24/outline'
import { BriefcaseIcon } from '@heroicons/vue/24/outline'
import { BellAlertIcon } from '@heroicons/vue/24/outline'
import { HandThumbUpIcon } from '@heroicons/vue/24/outline'
import { StarIcon } from '@heroicons/vue/24/outline'
import { UserCircleIcon } from '@heroicons/vue/24/outline'
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/vue/16/solid';
</script>

<template>
    <!-- Sidebar -->
    <aside class="w-48 bg-white shadow-lg p-4 transition-all overflow-hidden">
        <div class="flex items-center justify-between mb-2 text-gray-700 border-b pb-2 border-gray-300">
            <!-- Ikonica + ime + email -->
            <div class="flex items-center">
                <div class="space-y-1">
                    <h2 class="text-lg font-semibold">Please Login</h2>
                    <p class="text-sm text-gray-500">If you want to post ads and place bids, you must be logged in.</p>
                </div>
            </div>
        </div>
        <div class="flex flex-col items-center mb-2 text-gray-700 border-b pb-2 border-gray-300 space-y-2">
            <RouterLink to="/login"
                class="flex items-center justify-center gap-2 bg-red-500 text-white w-full text-center py-2 rounded-full hover:bg-red-400 transition">
                <ArrowLeftEndOnRectangleIcon class="w-5 h-5" />
                <span>Login</span>
            </RouterLink>
            <RouterLink to="/register"
                class="bg-orange-400 text-white w-full text-center py-2 rounded-full hover:bg-orange-500 transition">
                Register
            </RouterLink>
        </div>

        <ul class="space-y-1 border-b pb-2 border-gray-200 text-sm blur-xs pointer-events-none select-none">
            <li>
                <div class="flex items-center gap-3 px-2 py-2 rounded-md bg-sky-100 text-sky-700 font-semibold">
                    <ArchiveBoxIcon class="w-5 h-5 text-sky-700 text-base" />
                    <span>My Auctions</span>
                </div>
            </li>

            <li>
                <div class="flex items-center gap-3 px-2 py-2 rounded-md">
                    <BriefcaseIcon class="w-5 h-5 text-sky-700 text-base" />
                    <span class="text-gray-700 font-medium">My Bids</span>
                </div>
            </li>

            <li>
                <div class="flex items-center gap-3 px-2 py-2 rounded-md">
                    <ChatBubbleBottomCenterIcon class="w-5 h-5 text-sky-700 text-base" />
                    <span class="text-gray-700 font-medium">Messages</span>
                </div>
            </li>

            <li>
                <div class="flex items-center gap-3 px-2 py-2 rounded-md">
                    <BellAlertIcon class="w-5 h-5 text-sky-700 text-base" />
                    <span class="text-gray-700 font-medium">Notification</span>
                </div>
            </li>

            <li>
                <div class="flex items-center gap-3 px-2 py-2 rounded-md">
                    <HandThumbUpIcon class="w-5 h-5 text-sky-700 text-base" />
                    <span class="text-gray-700 font-medium">Reviews</span>
                </div>
            </li>

            <li>
                <div class="flex items-center gap-3 px-2 py-2 rounded-md">
                    <StarIcon class="w-5 h-5 text-sky-700 text-base" />
                    <span class="text-gray-700 font-medium">Follow</span>
                </div>
            </li>
        </ul>

        <!-- ✅ BLUR SEKCIJA -->
        <div class="border-b pb-2 pt-2 border-gray-200 text-sm blur-xs pointer-events-none select-none">
            <div class="flex items-center gap-3 px-2 py-2 rounded-md">
                <UserCircleIcon class="w-5 h-5 text-sky-700 text-base" />
                <span class="text-gray-700 font-medium">My Profile</span>
            </div>
        </div>
    </aside>
</template>