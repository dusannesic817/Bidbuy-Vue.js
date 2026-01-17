import { defineStore } from 'pinia'
import api, { getCsrfToken } from '@/axois'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const isAuthenticated = ref(false)
  const loading = ref(false)
  const errors = ref(null)
  const message = ref(null)

  const register = async (credentials) => {
    loading.value = true
    errors.value = null
    message.value = null
    
    try {
      await getCsrfToken()
      const response = await api.post('/register', credentials)
      
      user.value = response.data.user
      isAuthenticated.value = true
      message.value = response.data.message
      
      return { success: true, data: response.data }
    } catch (error) {
      
      if (error.response?.data?.errors) {
        // Laravel validacione greške (422)
        errors.value = error.response.data.errors
      } else if (error.response?.data?.message) {
        // Laravel custom poruka (401, 500, etc.)
        errors.value = { message: error.response.data.message }
      } else {
        
        errors.value = { message: 'An error occurred. Please try again.' }
      }
      return { success: false, errors: errors.value }
    } finally {
      loading.value = false
    }
  }

 
  const login = async (credentials) => {
    loading.value = true
    errors.value = null
    message.value = null
    
    try {
      await getCsrfToken()
      const response = await api.post('/login', credentials)
      
      user.value = response.data.user
      isAuthenticated.value = true
      message.value = response.data.message
      
      return { success: true, data: response.data }
    } catch (error) {
      
      if (error.response?.data?.errors) {
        // Laravel validacione greške (422)
        errors.value = error.response.data.errors
      } else if (error.response?.data?.message) {
        // Laravel custom poruka (401 - "Incorrect email or password")
        errors.value = { message: error.response.data.message }
      } else {
    
        errors.value = { message: 'An error occurred. Please try again.' }
      }
      return { success: false, errors: errors.value }
    } finally {
      loading.value = false
    }
  }

  // Logout
  const logout = async () => {
    loading.value = true
    
    try {
      await api.post('/logout')
      
      user.value = null
      isAuthenticated.value = false
      message.value = 'Logged out successfully'
      
      return { success: true }
    } catch (error) {
      console.error('Logout error:', error)
      user.value = null
      isAuthenticated.value = false
      return { success: false }
    } finally {
      loading.value = false
    }
  }


  const fetchUser = async () => {
    loading.value = true
    
    try {
      const response = await api.get('/user')
      user.value = response.data
      isAuthenticated.value = true
    } catch (error) {
      user.value = null
      isAuthenticated.value = false
    } finally {
      loading.value = false
    }
  }

  const clearErrors = () => {
    errors.value = null
    message.value = null
  }

  return {
    user,
    isAuthenticated,
    loading,
    errors,
    message,
    register,
    login,
    logout,
    fetchUser,
    clearErrors
  }
})