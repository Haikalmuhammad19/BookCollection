<template>
  <div class="edit-book" v-if="book">
    <h1>Edit Book</h1>
    <BookForm 
      :initial-data="book"
      submit-label="Update Book"
      @submit="handleSubmit"
    />
  </div>
  <div v-else>
    <h1>Book not found</h1>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBooks } from '../composables/useBooks'
import BookForm from '../components/BookForm.vue'

const route = useRoute()
const router = useRouter()
const { getBook, updateBook } = useBooks()

const book = computed(() => getBook(route.params.id))

const handleSubmit = (bookData) => {
  updateBook(route.params.id, bookData)
  router.push('/book/' + route.params.id)
}
</script>