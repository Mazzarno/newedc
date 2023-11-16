<template>
  <div>
    <!-- HEADER -->
    <div class="mx-auto max-w-screen-2xl pt-8 sm:pt-16 px-4 lg:px-6">
      <section
        class="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg shadow-2xl opacity-90"
      >
        <img
          src="/img/BANNIERE.jpg"
          class="h-full w-full max-h-[585px] max-w-[1536px] object-cover object-center"
        />
      </section>
    </div>
    <!-- INTRODUCTION -->
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
          <NuxtImg
            loading="lazy"
            format="webp"
            class="w-1/2 object-cover self-center shadow-2xl transition delay-100 hover:scale-110 duration-300 items-center md:order-first order-last rounded-lg"
            src="/img/totem1.jpg"
            alt="Totem À l’échelle d’une Copropriété"
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
        class="gap-8 items-center md:justify-items-end justify-items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 grid md:grid-cols-2 sm:py-16 lg:px-6 rounded-lg"
      >
        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-2xl tracking-tight font-extrabold text-primary">
            À l’échelle d’un Territoire
          </h2>
          <p class="mb-6 font-light text-gray-900 sm:text-xl">
            Faciliter l’entraide et l’inspiration entre Copropriétés.
          </p>
        </div>
        <NuxtImg
          loading="lazy"
          format="webp"
          class="w-1/2 object-cover self-center shadow-2xl transition delay-100 hover:scale-110 duration-300 items-center rounded-lg"
          src="/img/totem4.jpg"
          alt="Totem Faciliter l’entraide et l’inspiration entre Copropriétés."
        />
      </div>
    </section>
    <!-- TOTEM 3 -->
    <section class="bg-white">
      <div
        class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 grid md:grid-cols-2 sm:py-16 lg:px-6 justify-items-center md:justify-items-start"
      >
        <NuxtImg
          format="webp"
          loading="lazy"
          class="w-1/2 object-cover self-center shadow-2xl transition delay-100 hover:scale-110 duration-300 items-center md:order-first order-last rounded-lg"
          src="/img/totem7.jpg"
          alt="Totem À l’échelle de l’écosystème de l’habitat privé"
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
    <LazyPreviewBlog />
    <!-- PARTENAIRE -->
    <LazyPartenaireListe />
    <!-- Preview Vidéothèque -->
    <LazyPreviewVideo />
  </div>
</template>

<script setup>
useHead({
  title: 'Accueil',
})
</script>
