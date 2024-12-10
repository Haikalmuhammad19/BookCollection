import { ref } from 'vue'
import { useStorage } from '@vueuse/core'
import { computed } from 'vue'

export function useBooks() {
  const books = useStorage('books', [])
  const nextId = useStorage('nextId', 1)

  const sortedBooks = computed(() => {
    return [...books.value].sort((a, b) => b.id - a.id)
  })

  const addBook = (book) => {
    books.value.push({
      id: nextId.value++,
      ...book,
      createdAt: new Date().toISOString()
    })
  }

  const updateBook = (id, updatedBook) => {
    const index = books.value.findIndex(book => book.id === parseInt(id))
    if (index !== -1) {
      books.value[index] = { 
        ...books.value[index], 
        ...updatedBook,
        updatedAt: new Date().toISOString()
      }
    }
  }

  const deleteBook = (id) => {
    const index = books.value.findIndex(book => book.id === parseInt(id))
    if (index !== -1) {
      books.value.splice(index, 1)
      return true
    }
    return false
  }

  const getBook = (id) => {
    return books.value.find(book => book.id === parseInt(id))
  }

  return {
    books: sortedBooks,
    addBook,
    updateBook,
    deleteBook,
    getBook
  }
}