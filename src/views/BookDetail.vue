<template>
  <div class="book-detail animate-slide-in" v-if="book">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-3xl font-bold text-gray-900">{{ book.title }}</h1>
      <div class="flex gap-3">
        <router-link :to="'/edit/' + book.id" class="btn btn-primary">
          Edit Book
        </router-link>
        <button @click="showDeleteModal = true" class="btn bg-red-600 hover:bg-red-700 text-white">
          Delete
        </button>
      </div>
    </div>

    <div class="bg-white rounded-lg shadow-sm p-6 mb-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 class="text-lg font-semibold mb-4">Book Details</h3>
          <div class="space-y-3">
            <p><span class="font-medium">Author:</span> {{ book.author }}</p>
            <p><span class="font-medium">Year:</span> {{ book.year }}</p>
          </div>
        </div>
        <div>
          <h3 class="text-lg font-semibold mb-4">Metadata</h3>
          <div class="space-y-3">
            <p v-if="book.createdAt">
              <span class="font-medium">Added:</span> {{ formatDate(book.createdAt) }}
            </p>
            <p v-if="book.updatedAt">
              <span class="font-medium">Last Updated:</span> {{ formatDate(book.updatedAt) }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <router-link to="/" class="btn btn-secondary">Back to List</router-link>

    <DeleteConfirmation
      v-if="showDeleteModal"
      :book-title="book.title"
      @confirm="handleDelete"
      @cancel="showDeleteModal = false"
    />
  </div>
  <div v-else class="text-center py-12">
    <h1 class="text-2xl font-bold text-gray-900 mb-4">Book not found</h1>
    <router-link to="/" class="btn btn-primary">Back to List</router-link>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useBooks } from '../composables/useBooks'
import { formatDate } from '../utils/dateFormatter'
import DeleteConfirmation from '../components/DeleteConfirmation.vue'

const route = useRoute()
const router = useRouter()
const { getBook, deleteBook } = useBooks()
const showDeleteModal = ref(false)

const book = computed(() => getBook(route.params.id))

const handleDelete = () => {
  if (deleteBook(route.params.id)) {
    router.push('/')
  }
}
</script>