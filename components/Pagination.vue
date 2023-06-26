<!-- components/Pagination.vue -->
<template>
    <div>
      <button @click="$emit('prev')" :disabled="!hasPrev">Previous</button>
      <button @click="$emit('next')" :disabled="!hasNext">Next</button>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      hasNext: {
        type: Boolean,
        default: false,
      },
      hasPrev: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
  