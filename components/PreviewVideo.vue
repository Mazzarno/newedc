<template>
  <section>
    <div
      class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 grid md:grid-cols-2 sm:py-16 lg:px-6"
    >
      <h2 class="text-4xl tracking-tight font-extrabold text-primary">
        La Vidéothèque
      </h2>
    </div>
    <div class="container px-5 pb-24 mx-auto">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div v-for="video in playlists[1].videos" :key="video.id" class="p-4">
          <div
            class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden object-cover self-center shadow-xl transition delay-100 hover:shadow-2xl duration-300"
          >
            <div class="video-responsive group">
              <iframe
                lazy
                class="object-cover object-center transition duration-200 group-hover:scale-110"
                defer
                :src="yt_api + video.URL + yt_nocookie"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="p-6">
              <div class="">
                <h1 class="text-xl text-gray-900 mb-2 truncate block">
                  {{ video.Titre }}
                </h1>
                <p class="leading-relaxed mb-3 truncate block text-gray-700">
                  {{ video.Description }}
                </p>
              </div>
              <div class="flex items-center flex-wrap">
                <a
                  :href="youtube_api + video.URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-primary inline-flex items-center md:mb-2 lg:mb-0 hover:underline transition duration-300 hover:animate-pulse"
                >
                  Voir la vidéo sur Youtube
                  <i class="ml-1 mdi mdi-youtube mdi-24px"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink nuxt-link to="/videotheque">
        <button
          class="flex mx-auto mt-16 text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-secondary rounded text-lg shadow-xl transition delay-100 hover:shadow-2xl duration-300"
        >
          Voir la vidéothèque
        </button>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      yt_api: 'https://www.youtube-nocookie.com/embed/',
      yt_nocookie: '?enablejsapi=1',
      youtube_api: 'https://www.youtube.com/watch?v=',
    }
  },
}
</script>
<script setup>
const playlists = await $fetch('https://echappee-copro.fr/playlists').catch(
  (error) => error.data,
)
</script>
