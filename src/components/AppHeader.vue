<template>
  <header class="bg-white shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <router-link to="/" class="text-2xl font-bold text-emerald-600">
            📚 BookShelf
          </router-link>
        </div>
        
        <nav class="hidden md:flex space-x-8">
          <router-link 
            v-for="item in menuItems" 
            :key="item.path"
            :to="item.path"
            class="nav-link"
          >
            <component :is="item.icon" class="h-5 w-5 inline-block mr-1" />
            {{ item.name }}
          </router-link>
        </nav>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="isMenuOpen = !isMenuOpen"
            class="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
          >
            <Bars3Icon v-if="!isMenuOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-100 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link
            v-for="item in menuItems"
            :key="item.path"
            :to="item.path"
            class="mobile-nav-link"
            @click="isMenuOpen = false"
          >
            <component :is="item.icon" class="h-5 w-5 inline-block mr-2" />
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { 
  HomeIcon, 
  PlusCircleIcon, 
  ChartBarIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/vue/24/outline'

const isMenuOpen = ref(false)

const menuItems = [
  { name: 'Home', path: '/', icon: HomeIcon },
  { name: 'Add Book', path: '/add', icon: PlusCircleIcon },
  { name: 'Statistics', path: '/stats', icon: ChartBarIcon }
]
</script>

<style scoped>
.nav-link {
  @apply flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-emerald-600 transition-colors duration-200;
}

.nav-link.router-link-active {
  @apply text-emerald-600;
}

.mobile-nav-link {
  @apply block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50;
}

.mobile-nav-link.router-link-active {
  @apply bg-emerald-50 text-emerald-600;
}
</style>