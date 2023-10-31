<template>
  <div>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1
          class="sm:text-4xl text-3xl font-medium title-font mb-4 text-primary"
        >
          Le Blog
        </h1>
      </div>
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div v-for="article in articles" :key="article.id" class="p-4">
          <!---->
          <div
            class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden object-cover self-center shadow-xl transition delay-100 hover:shadow-2xl duration-300"
          >
            <NuxtLink nuxt-link :to="`/blog/articles/${article.id}`">
              <img
                class="w-full object-cover object-center block"
                :src="
                  'https://echappee-copro.fr' + article.Media_contenu[0].url
                "
                alt="blog"
              />
            </NuxtLink>
            <div class="p-6">
              <div>
                <nuxt-link
                  nuxt-link
                  :to="`/blog/articles/${article.id}`"
                  class="text-xl text-primary hoverunderline mb-2"
                >
                  {{ article.Titre }}
                </nuxt-link>
                <p
                  class="leading-relaxed mb-3 mt-2 truncate block text-gray-700"
                >
                  {{ article.Description }}
                </p>
                <div class="inline-flex items-center mb-3">
                  <p class="space-x-3">
                    <small class="italic"
                      >Publié le
                      {{
                        moment(article.Publication).locale("fr").format("LL")
                      }}</small
                    ><small class="italic">Ecrit par : </small>
                  </p>
                  <span class="flex-grow flex flex-col pl-2">
                    <span class="text-gray-900 leading-relaxed italic">{{
                      article.Auteur
                    }}</span>
                  </span>
                </div>
              </div>
              <div class="flex justify-self-end flex-wrap">
                <NuxtLink
                  nuxt-link
                  :to="`/blog/articles/${article.id}`"
                  class="text-primary inline-flex items-center md:mb-2 lg:mb-0 hover:underline transition duration-300 hover:animate-pulse"
                  >Voir l'article
                  <i class="ml-1 mdi mdi-arrow-right-thin mdi-24px"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import moment from "moment";
import "moment/dist/locale/fr";
const articles = await $fetch("https://echappee-copro.fr/articles").catch(
  (error) => error.data
);
</script>
