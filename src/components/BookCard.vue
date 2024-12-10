<template>
  <div class="book-card animate-fade-in shadow-lg rounded-lg overflow-hidden bg-white">
    <div class="relative group">
      <!-- Cover dan Gradient Overlay -->
      <div class="aspect-w-3 aspect-h-4 bg-gray-100 rounded-lg overflow-hidden">
        <img 
          :src="book.cover || 'https://via.placeholder.com/150'" 
          alt="Book Cover" 
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 class="text-lg font-semibold truncate">{{ book.title }}</h3>
          <p class="text-sm opacity-90">By: {{ book.author }}</p>
          <p class="text-sm opacity-90">Year: {{ book.year }}</p>
        </div>
      </div>

      <!-- Hover Menu -->
      <div
        class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
      >
        <router-link
          :to="'/book/' + book.id"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          View Details
        </router-link>
        <router-link
          :to="'/edit/' + book.id"
          class="px-4 py-2 bg-yellow-500 text-white rounded-lg shadow-md hover:bg-yellow-600 transition-transform transform hover:scale-105"
        >
          Edit
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  book: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.book-card {
  width: 100%;
  max-width: 250px; /* Lebar maksimum kartu */
  margin: auto; /* Posisi center */
}

.aspect-w-3 {
  position: relative;
  padding-top: 133.33%; /* Perbandingan 3:4 */
}

.aspect-h-4 {
  height: 0;
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}

.group .opacity-0 {
  opacity: 0;
}

img {
  transition: transform 0.3s ease-in-out;
}

.group:hover img {
  transform: scale(1.05);
}
</style>
