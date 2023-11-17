<template>
  <div class="select-none">
    <NuxtLayout></NuxtLayout>
    <RGPD />
    <Loading v-show="loading" />
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
