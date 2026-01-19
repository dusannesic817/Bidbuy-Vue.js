<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'
import logo from '@/assets/images/auction.svg'

const authStore = useAuthStore()
const router = useRouter()

const form = ref({
  email: '',
  password: ''
})

const handleLogin = async () => {
  await authStore.login(form.value)
  
  if (authStore.user) {
    router.push('/') 
  } else {
    console.log(authStore.error)
  }
}

</script>

<template>
  <div class="min-h-screen flex items-center justify-center px-8 bg-gray-50">
    <div class="flex flex-col md:flex-row bg-white border border-gray-100 shadow-lg rounded-3xl w-full md:max-w-4xl">
      
      <!-- Ilustracija -->
      <div class="p-8 hidden md:block">
        <img :src="logo" alt="Auction Logo" class="w-[500px] h-full"/>
      </div>

      <!-- Login kartica -->
      <div class="p-8 w-full md:max-w-md relative">
        <h2 class="text-center text-3xl font-semibold text-gray-700 pt-5 pb-10">Login</h2>

        

        <form @submit.prevent="handleLogin" class="space-y-5 border-b border-gray-200 pb-4 mb-4">
          <div>
            <div class="relative">
              <i class="fa-solid fa-envelope absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 ms-1"></i>
              <input 
                v-model="form.email"
                type="email"
                required
                class="w-full p-3 pl-10 rounded-3xl border border-gray-300 focus:border-transparent focus:ring-1 focus:ring-orange-400 outline-none"
                :class="{ 'border-red-500': authStore.errors?.email || authStore.errors?.message }"
                placeholder="Email" 
              />
            </div>
          </div>

          <div>
            <div class="relative">
              <i class="fa-solid fa-unlock absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 ms-1"></i>
              <input 
                v-model="form.password"
                type="password"
                required
                class="w-full p-3 pl-10 rounded-3xl border border-gray-300 focus:border-transparent focus:ring-1 focus:ring-orange-400 outline-none"
                :class="{ 'border-red-500': authStore.errors?.password || authStore.errors?.message }"
                placeholder="Password" 
              />
            </div>
          </div>

          <div class="flex justify-center text-sm">
            <a href="#" class="text-gray-700 hover:underline">Forgot the password?</a>
          </div>

          <button 
            type="submit"
            :disabled="authStore.loading"
            class="w-full bg-orange-300 hover:bg-orange-400 text-white font-semibold py-3 rounded-3xl transition cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {{ authStore.loading ? 'Loading...' : 'Login' }}
          </button>
        </form>

        <!-- Google dugme -->
        <button
          class="w-full mt-4 flex items-center justify-center gap-2 border border-orange-400 hover:bg-orange-50 text-gray-700 font-medium py-3 rounded-3xl transition">
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-5 h-5" alt="Google" />
          Login by Google
        </button>

        <p class="text-center text-gray-600 text-sm mt-4">
          Don't have account?
          <router-link to="/register" class="text-orange-700 font-semibold hover:underline">Register here</router-link>
        </p>
      </div>

    </div>
  </div>
</template>