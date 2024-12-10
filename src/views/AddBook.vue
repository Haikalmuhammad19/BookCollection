<template>
  <div class="add-book">
    <h1>Add New Book</h1>
    <BookForm submit-label="Add Book" @submit="handleSubmit" />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useBooks } from '../composables/useBooks'
import BookForm from '../components/BookForm.vue'

const router = useRouter()
const { addBook } = useBooks()

const handleSubmit = (bookData) => {
  addBook(bookData)
  router.push('/')
}
</script>