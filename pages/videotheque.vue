<template>
  <div>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1
          class="sm:text-4xl text-3xl font-medium title-font mb-4 text-primary"
        >
          La Vidéothèque
        </h1>
      </div>
      <h1 class="sm:text-3xl text-2xl tracking-tight text-primary">
        Projet en roue libre
      </h1>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div v-for="video in videos" :key="video.id" class="p-4">
          <!---->
          <div
            class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden object-cover self-center shadow-xl transition delay-100 hover:shadow-2xl duration-300"
          >
            <div class="video-responsive">
              <iframe
                defer
                :src="yt_api + video.URL"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
            <div class="p-6">
              <div>
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
                  >Voir la vidéo sur Youtube
                  <i class="ml-1 mdi mdi-youtube mdi-24px"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const videos = await $fetch("https://echappee-copro.fr/videos").catch(
  (error) => error.data
);
</script>
<script>
export default {
  data() {
    return {
      yt_api: "https://www.youtube-nocookie.com/embed/",
      youtube_api: "https://www.youtube.com/watch?v=",
    };
  },
};
</script>
