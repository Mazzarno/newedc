<template>
  <div class="select-none">
    <Loading v-show="loading" />
    <NuxtLayout></NuxtLayout>
    <LazyRGPD />
  </div>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp()
const loading = ref(true)
nuxtApp.hook('page:start', () => {
  loading.value = true
})
nuxtApp.hook('page:finish', () => {
  loading.value = false
})
</script>
