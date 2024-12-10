<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Delete Book</h3>
      <p class="text-gray-600 mb-6">Are you sure you want to delete "{{ bookTitle }}"? This action cannot be undone.</p>
      <div class="flex justify-end gap-4">
        <button 
          @click="$emit('cancel')" 
          class="btn btn-secondary"
        >
          Cancel
        </button>
        <button 
          @click="$emit('confirm')" 
          class="btn btn-primary bg-red-600 hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  bookTitle: {
    type: String,
    required: true
  }
})

defineEmits(['confirm', 'cancel'])
</script>