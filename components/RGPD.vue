<template>
  <section
    v-if="store.cookie"
    class="cookie fixed max-w-md p-4 mx-auto bg-white border z-40 border-gray-200 left-0 right-0 bottom-10 opacity-95 drop-shadow-2xl rounded-2xl px-4 lg:px-6"
  >
    <h2 class="font-semibold text-primary">🍪 Information sur nos Cookies</h2>

    <p class="mt-4 text-sm text-gray-900">
      Notre site utilise que le cookie de Youtube qui recense, à la lecture de
      la vidéo, le nombre de vues. En continuant à utiliser notre site, vous
      acceptez notre utilisation de ce cookie.
    </p>

    <div class="flex items-center justify-between mt-4 gap-x-4 shrink-0">
      <button
        class="text-xs text-gray-800 underline transition-colors duration-300 dark:text-white dark:hover:text-gray-400 hover:text-gray-600 focus:outline-none"
      ></button>
      <button
        @click="store.agreePrivacyPolicy"
        class="text-xs bg-primary font-medium rounded-lg hover:bg-secondary text-white px-4 py-2.5 focus:outline-none drop-shadow-lg hover:drop-shadow-2xl transition duration-300"
      >
        Accepter
      </button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useStore } from "~/store/index.js";
const store = useStore();
store.cookie;
</script>
<style scoped>
.cookie {
  transform: translateX(0%);
  transition: transform 300ms linear;
}

.cookie.hidden-cookie {
  transform: translateX(-300%);
}
</style>
