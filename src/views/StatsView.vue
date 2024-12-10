<template>
  <div class="stats-view animate-slide-in">
    <h1 class="text-3xl font-bold text-gray-900 mb-8">Library Statistics</h1>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="stat-card">
        <h3 class="text-lg font-medium text-gray-600">Total Books</h3>
        <p class="text-4xl font-bold text-emerald-600">{{ stats.totalBooks }}</p>
      </div>
      
      <div class="stat-card">
        <h3 class="text-lg font-medium text-gray-600">Unique Authors</h3>
        <p class="text-4xl font-bold text-emerald-600">{{ stats.uniqueAuthors }}</p>
      </div>
      
      <div class="stat-card">
        <h3 class="text-lg font-medium text-gray-600">Average Year</h3>
        <p class="text-4xl font-bold text-emerald-600">{{ stats.averageYear }}</p>
      </div>
      
      <div class="stat-card">
        <h3 class="text-lg font-medium text-gray-600">Latest Addition</h3>
        <p class="text-xl font-semibold text-emerald-600">{{ stats.latestBook?.title || 'N/A' }}</p>
      </div>
    </div>

    <div class="mt-12">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">Authors Distribution</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div v-for="(count, author) in stats.authorCounts" :key="author" class="bg-white p-4 rounded-lg shadow-sm">
          <p class="font-medium text-gray-900">{{ author }}</p>
          <p class="text-sm text-gray-600">{{ count }} book{{ count > 1 ? 's' : '' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useBooks } from '../composables/useBooks'

const { books } = useBooks()

const stats = computed(() => {
  const bookList = books.value
  const authors = new Set(bookList.map(book => book.author))
  const years = bookList.map(book => parseInt(book.year))
  const authorCounts = bookList.reduce((acc, book) => {
    acc[book.author] = (acc[book.author] || 0) + 1
    return acc
  }, {})

  return {
    totalBooks: bookList.length,
    uniqueAuthors: authors.size,
    averageYear: years.length ? Math.round(years.reduce((a, b) => a + b) / years.length) : 0,
    latestBook: bookList[0],
    authorCounts
  }
})
</script>

<style scoped>
.stat-card {
  @apply bg-white p-6 rounded-lg shadow-sm border border-gray-100;
}
</style>