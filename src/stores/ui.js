import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUIStore = defineStore('ui', () => {
  // Sidebar
  const showSidebar = ref(true)
  const toggleSidebar = () => { showSidebar.value = !showSidebar.value }

  // Navbar
  const openNavbarMenu = ref(false)
  const toggleNavbarMenu = () => { openNavbarMenu.value = !openNavbarMenu.value }


  return { 
    showSidebar, toggleSidebar,
    openNavbarMenu, toggleNavbarMenu,

  }
})
