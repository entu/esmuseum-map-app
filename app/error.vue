<script setup>
defineProps({
  error: { type: Object, required: true }
})
</script>

<template>
  <nuxt-layout>
    <div class="flex size-full items-center justify-center text-xl">
      {{ error.message }}
    </div>
  </nuxt-layout>
</template>
