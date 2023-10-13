<template>
  <div class="">
    <div class="bg-primary md:pt-32 pt-32"></div>
    <div class="container px-5 pt-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-4xl text-3xl font-medium title-font text-primary">
          {{ articles[$route.params.id - 1].Titre }}
        </h1>
      </div>
    </div>

    <section>
      <div>
        <div class="lg:w-4/6 mx-auto">
          <div class="rounded-lg overflow-hidden">
            <div class="mb-10 mt-5">
              <p>
                {{ articles[$route.params.id - 1].Description }}
              </p>
            </div>
          </div>
          <div>
            <img
              alt="content"
              class="object-cover object-center mx-auto rounded"
              :src="
                api_url + articles[$route.params.id - 1].Media_contenu[0].url
              "
            />
          </div>
          <div
            class="prose max-w-none prose-ol:list-inside prose-li:marker:primary prose-a:text-primary prose-a:hover:underline"
          >
            <div class="mb-10 mt-10">
              <div
                v-html="
                  nuxtApp.$mdit.render(articles[$route.params.id - 1].Contenue1)
                "
              ></div>
            </div>
            <div>
              <img
                alt="content"
                class="object-cover object-center mx-auto rounded"
                :src="
                  api_url + articles[$route.params.id - 1].Media_contenu2[0].url
                "
              />
            </div>
            <div class="mb-10 mt-10">
              <div
                v-html="
                  nuxtApp.$mdit.render(articles[$route.params.id - 1].Contenu2)
                "
              ></div>
            </div>
            <div>
              <div class="video-responsive mx-auto rounded">
                <iframe
                  defer
                  :src="yt_api + articles[$route.params.id - 1].URL_YT"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="mb-10 mt-10">
              <div
                v-html="
                  nuxtApp.$mdit.render(articles[$route.params.id - 1].Contenu3)
                "
              ></div>
            </div>
          </div>
          <div class="inline-flex items-center mb-5">
            <p class="space-x-3">
              <small
                class="italic"
                v-if="articles[$route.params.id - 1].Publication"
                >Publié le
                {{
                  moment(articles[$route.params.id - 1].Publication)
                    .locale("fr")
                    .format("LL")
                }}</small
              ><small class="italic">Ecrit par : </small>
            </p>
            <span class="flex-grow flex flex-col pl-2">
              <span class="text-gray-900 leading-relaxed italic">{{
                articles[$route.params.id - 1].Auteur
              }}</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import md from "markdown-it";
import moment from "moment";
import "moment/dist/locale/fr";
const renderer = md();
const nuxtApp = useNuxtApp();
const articles = await $fetch("https://echappee-copro.fr/articles").catch(
  (error) => error.data
);
</script>

<script>
export default {
  data() {
    return {
      yt_api: "https://www.youtube.com/embed/",
      api_url: "https://echappee-copro.fr",
    };
  },
};
</script>

