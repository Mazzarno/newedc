<template>
  <div>
    <!-- HEADER -->
    <div class="bg-primary md:pt-24 pt-32"></div>
    <section class="header">
      <img src="~/assets/img/banniere-header.jpg" alt="" srcset="" />
    </section>
    <!-- PRESENTATION -->
    <section>
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div class="max-w-screen-md">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-primary">
            L'ÉCHAPPÉE DES COPROPRIÉTÉS :
          </h2>
          <p class="mb-8 font-light text-gray-900 sm:text-xl">
            L’Échappée des copropriétés est née de l’envie de contribuer à
            l’amélioration de l’habitat et des conditions de vie des
            habitant·e·s de copropriété, en partant toujours de leur parole,
            individuelle et collective.
          </p>
          <p class="mb-8 font-light text-gray-900 sm:text-xl">
            Nous agissons particulièrement sur les dynamiques collectives en
            copropriété, c’est-à-dire, les relations, les interactions, les
            rôles et positionnements non seulement entre les habitant·e·s, mais
            aussi avec les acteurs qui gravitent autour de leurs copropriétés
            (collectivités, accompagnateurs, fournisseurs, associations…).
          </p>
          <p class="mb-8 font-light text-gray-900 sm:text-xl">
            Nous avons la conviction que c’est au niveau de ces dynamiques
            collectives que se trouvent, certes, une des origines des problèmes
            des copropriétés, mais également un levier pour les affronter.
          </p>
        </div>
      </div>
    </section>
    <!-- TOTEM 1 -->
    <section class="bg-white">
      <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <h1 class="text-4xl tracking-tight font-extrabold text-primary">
          Nos échelles d'intervention :
        </h1>
      </div>
      <div
        class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 grid md:grid-cols-2 sm:py-16 lg:px-6 justify-items-center md:justify-items-start"
      >
        <div class="w-full">
          <img
            class="w-1/2 object-cover self-center shadow-2xl transition delay-100 hover:scale-110 duration-300 items-center md:order-first order-last"
            src="~/assets/img/totem1.jpg"
            alt="dashboard image"
          />
        </div>
        <div class="mt-4 md:mt-0 order-first md:order-last">
          <h2 class="mb-4 text-2xl tracking-tight font-extrabold text-primary">
            À l’échelle d’une Copropriété
          </h2>
          <p class="mb-6 font-light text-gray-900 sm:text-xl">
            Accompagner et animer vers des dynamiques collectives apaisées et
            fonctionnelles.
          </p>
        </div>
      </div>
    </section>
    <!-- TOTEM 2 -->
    <section class="bg-tertiary">
      <div
        class="gap-8 items-center md:justify-items-end justify-items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 grid md:grid-cols-2 sm:py-16 lg:px-6"
      >
        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-2xl tracking-tight font-extrabold text-primary">
            À l’échelle d’un Territoire
          </h2>
          <p class="mb-6 font-light text-gray-900 sm:text-xl">
            Faciliter l’entraide et l’inspiration entre Copropriétés.
          </p>
        </div>
        <img
          class="w-1/2 object-cover self-center shadow-2xl transition delay-100 hover:scale-110 duration-300 items-center"
          src="~/assets/img/totem4.jpg"
          alt="dashboard image"
        />
      </div>
    </section>
    <!-- TOTEM 3 -->
    <section class="bg-white">
      <div
        class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 grid md:grid-cols-2 sm:py-16 lg:px-6 justify-items-center md:justify-items-start"
      >
        <img
          class="w-1/2 object-cover self-center shadow-2xl transition delay-100 hover:scale-110 duration-300 items-center md:order-first order-last"
          src="~/assets/img/totem7.jpg"
          alt="dashboard image"
        />

        <div class="mt-4 md:mt-0 order-first md:order-last">
          <h2 class="mb-4 text-2xl tracking-tight font-extrabold text-primary">
            À l’échelle de l’écosystème de l’habitat privé
          </h2>
          <p class="mb-6 font-light text-gray-900 sm:text-xl">
            Développer la recherche, valoriser et transmettre nos expériences de
            terrain.
          </p>
        </div>
      </div>
    </section>
    <!-- Preview BLOG -->
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
        <NuxtLink nuxt-link to="/blog">
          <button
            class="flex mx-auto mt-16 text-white bg-primary border-0 py-2 px-8 focus:outline-none hover:bg-secondary rounded text-lg shadow-xl transition delay-100 hover:shadow-2xl duration-300"
          >
            Voir tout le blog
          </button>
        </NuxtLink>
      </div>
    </section>
    <!-- PARTENAIRE -->
    <section class="bg-white mx-auto pb-24">
      <div
        class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 grid md:grid-cols-2 sm:py-16 lg:px-6"
      >
        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-primary">
          Ils·Elles nous font confiance :
        </h2>
      </div>
      <div class="grid grid-cols-6 gap-4">
        <div class="col-start-2 col-span-4">
          <confiancelist></confiancelist>
        </div>
      </div>
    </section>
    <!-- Preview Vidéothèque -->
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
                    >Voir la vidéo sur Youtube
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
  </div>
</template>

<script setup>
import moment from "moment";
import "moment/dist/locale/fr";
const categories = await $fetch("https://echappee-copro.fr/categories").catch(
  (error) => error.data
);
const playlists = await $fetch("https://echappee-copro.fr/playlists").catch(
  (error) => error.data
);
useHead({
  title: "Accueil",
});
</script>
<script>
export default {
  data() {
    return {
      yt_api: "https://www.youtube.com/embed/",
      youtube_api: "https://www.youtube.com/watch?v=",
    };
  },
};
</script>

