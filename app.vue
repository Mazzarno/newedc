<template>
  <div class="select-none">
    <Loading v-show="loading" />
    <NuxtLayout v-show="loading == false">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import AOS from "aos";
onMounted(() => AOS.init());
const nuxtApp = useNuxtApp();
const loading = ref(true);
nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  window.setTimeout(() => {
    loading.value = false;
  }, 1000);
});
</script>