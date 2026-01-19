import { defineStore } from 'pinia'
import api, { getCsrfToken } from '@/axois'


export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    initialized: false,
    initializing: false,
    lastState: localStorage.getItem('auth:lastState'), // ⬅️ ključ
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
    shouldShowAuthUI: (state) => state.lastState === 'auth',
  },

  actions: {
    async bootstrap() {
      if (this.initialized || this.initializing) return

      this.initializing = true

      try {
        const { data } = await api.get('/user')
        this.user = data
        this.lastState = 'auth'
        localStorage.setItem('auth:lastState', 'auth')
      } catch {
        this.user = null
        this.lastState = 'guest'
        localStorage.setItem('auth:lastState', 'guest')
      } finally {
        this.initialized = true
        this.initializing = false
      }
    },

    async login(credentials) {
      await getCsrfToken()
      await api.post('/login', credentials)

      this.user = {}          // optimistic
      this.lastState = 'auth'
      localStorage.setItem('auth:lastState', 'auth')

      await this.bootstrap()
    },

    logout() {
      this.user = null
      this.lastState = 'guest'
      localStorage.setItem('auth:lastState', 'guest')

      api.post('/logout') // fire & forget
    },
  },
})
