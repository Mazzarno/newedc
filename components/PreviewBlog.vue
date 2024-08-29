<template>
  <section class="bg-tertiary pb-14">
    <div class="pt-8 px-4 mx-auto max-w-screen-xl sm:pt-14 lg:px-6">
      <h1 class="text-4xl tracking-tight font-extrabold text-primary">
        Le Blog
      </h1>
    </div>
    <div class="container px-5 sm:pt-14 pt-8 mx-auto">
      <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
        <div
          v-for="article in categories[1].articles"
          :key="article.id"
          class="p-4"
        >
          <div
            class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden object-cover self-center shadow-xl transition delay-100 hover:shadow-2xl duration-300"
          >
            <NuxtLink
              class="group"
              nuxt-link
              :to="`/blog/articles/${article.id}`"
            >
              <img
                class="w-full object-cover object-center transition duration-200 group-hover:scale-110"
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
              </div>

              <div class="mt-auto flex items-end justify-between mb-3">
                <div class="flex items-center gap-2">
                  <div
                    class="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-100"
                  >
                    <img
                      :src="'https://echappee-copro.fr' + article.Avatar[0].url"
                      :alt="article.Auteur"
                      class="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div>
                    <span class="block text-primary">{{ article.Auteur }}</span>
                    <span class="block text-sm text-gray-400">
                      {{
                        moment(article.Publication).locale('fr').format('LL')
                      }}
                    </span>
                  </div>
                </div>

                <span class="rounded border px-2 py-1 text-sm text-gray-500">
                  Article
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink nuxt-link to="/blog">
        <button
          class="flex mx-auto mt-16 text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-secondary rounded text-lg shadow-xl transition delay-100 hover:shadow-2xl duration-300"
        >
          Voir tout le blog
        </button>
      </NuxtLink>
    </div>
  </section>
</template>
<script setup>
import moment from 'moment'
import 'moment/dist/locale/fr'
const categories = await $fetch('https://echappee-copro.fr/categories').catch(
  (error) => error.data,
)
</script>
