<template>
  <form @submit.prevent="handleSubmit" class="book-form">
    <div class="form-group">
      <label for="title">Title:</label>
      <input id="title" v-model="formData.title" required>
    </div>
    
    <div class="form-group">
      <label for="author">Author:</label>
      <input id="author" v-model="formData.author" required>
    </div>
    
    <div class="form-group">
      <label for="year">Year:</label>
      <input id="year" v-model="formData.year" type="number" required>
    </div>
    
    <button type="submit" class="btn">{{ submitLabel }}</button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'

const props = defineProps({
  initialData: {
    type: Object,
    default: () => ({ title: '', author: '', year: '' })
  },
  submitLabel: {
    type: String,
    default: 'Submit'
  }
})

const emit = defineEmits(['submit'])

const formData = reactive({
  title: props.initialData.title,
  author: props.initialData.author,
  year: props.initialData.year
})

const handleSubmit = () => {
  emit('submit', { ...formData })
}
</script>

<style scoped>
.book-form {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.btn {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>