<template>
  <div class="home animate-slide-in">
    <div class="flex justify-between items-center mb-8">
      <h1 class="text-3xl font-bold text-gray-900">Book Collection</h1>
      <div class="flex gap-4">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Search books..." 
          class="input"
        >
        <select v-model="sortBy" class="input">
          <option value="title">Sort by Title</option>
          <option value="author">Sort by Author</option>
          <option value="year">Sort by Year</option>
        </select>
      </div>
    </div>

    <div v-if="filteredBooks.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <BookCard
        v-for="book in filteredBooks"
        :key="book.id"
        :book="book"
      />
    </div>
    <div v-else class="text-center py-12">
      <p class="text-gray-500 text-lg">No books found. Try adjusting your search or add some books!</p>
      <router-link to="/add" class="btn btn-primary inline-block mt-4">Add Your First Book</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useBooks } from '../composables/useBooks'
import BookCard from '../components/BookCard.vue'

const { books } = useBooks()
const searchQuery = ref('')
const sortBy = ref('title')

const filteredBooks = computed(() => {
  let result = books.value.filter(book => 
    book.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    book.author.toLowerCase().includes(searchQuery.value.toLowerCase())
  )

  return result.sort((a, b) => {
    if (sortBy.value === 'year') {
      return b.year - a.year
    }
    return a[sortBy.value].localeCompare(b[sortBy.value])
  })
})
</script>