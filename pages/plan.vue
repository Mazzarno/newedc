<template>
  <div
    class="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div
      class="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0"
    >
      <svg viewBox="0 0 88 88" class="w-full max-w-screen-xl text-orange-100">
        <circle fill="currentColor" cx="44" cy="44" r="15.5"></circle>
        <circle
          fill-opacity="0.2"
          fill="currentColor"
          cx="44"
          cy="44"
          r="44"
        ></circle>
        <circle
          fill-opacity="0.2"
          fill="currentColor"
          cx="44"
          cy="44"
          r="37.5"
        ></circle>
        <circle
          fill-opacity="0.3"
          fill="currentColor"
          cx="44"
          cy="44"
          r="29.5"
        ></circle>
        <circle
          fill-opacity="0.3"
          fill="currentColor"
          cx="44"
          cy="44"
          r="22.5"
        ></circle>
      </svg>
    </div>
    <div class="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <NuxtLink
        to="/"
        class="flex flex-col justify-between overflow-hidden text-center transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
      >
        <div class="p-5">
          <div class="w-10 h-10 md:mb-8 rounded-full bg-orange-50">
            <i class="mdi mdi-home-outline mdi-24px text-primary"></i>
          </div>
          <h1 class="text-primary text-xl">Accueil</h1>
        </div>
        <div
          class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
        ></div>
      </NuxtLink>
      <NuxtLink
        to="/blog"
        class="flex flex-col justify-between overflow-hidden text-center transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
      >
        <div class="p-5">
          <div class="w-10 h-10 md:mb-8 rounded-full bg-orange-50">
            <i class="mdi mdi-pencil-outline mdi-24px text-primary"></i>
          </div>
          <h1 class="text-primary text-xl">Blog</h1>
        </div>
        <div
          class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
        ></div>
      </NuxtLink>
      <NuxtLink
        to="/videotheque"
        class="flex flex-col justify-between overflow-hidden text-center transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
      >
        <div class="p-5">
          <div class="w-10 h-10 md:mb-8 rounded-full bg-orange-50">
            <i class="mdi mdi-video-outline mdi-24px text-primary"></i>
          </div>
          <h1 class="text-primary text-xl">Vidéothèque</h1>
        </div>
        <div
          class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
        ></div>
      </NuxtLink>
      <NuxtLink
        to="/contact"
        class="flex flex-col justify-between overflow-hidden text-center transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
      >
        <div class="p-5">
          <div class="w-10 h-10 md:mb-8 rounded-full bg-orange-50">
            <i class="mdi mdi-email-outline mdi-24px text-primary"></i>
          </div>
          <h1 class="text-primary text-xl">Contact</h1>
        </div>
        <div
          class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
        ></div>
      </NuxtLink>
      <NuxtLink
        to="/plan"
        class="flex flex-col justify-between overflow-hidden text-center transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
      >
        <div class="p-5">
          <div class="w-10 h-10 md:mb-8 rounded-full bg-orange-50">
            <i class="mdi mdi-map-outline mdi-24px text-primary"></i>
          </div>
          <h1 class="text-primary text-xl">Plan du site</h1>
        </div>
        <div
          class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
        ></div>
      </NuxtLink>
      <NuxtLink
        to="/mentions_legales"
        class="flex flex-col justify-between overflow-hidden text-center transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
      >
        <div class="p-5">
          <div class="w-10 h-10 md:mb-8 rounded-full bg-orange-50">
            <i class="mdi mdi-book-outline mdi-24px text-primary"></i>
          </div>
          <h1 class="text-primary text-xl">Mentions Légales</h1>
        </div>
        <div
          class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
        ></div>
      </NuxtLink>
      <a
        href="https://echappee-copro.org/sitemap.xml"
        class="flex flex-col justify-between overflow-hidden text-center transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
      >
        <div class="p-5">
          <div class="w-10 h-10 md:mb-8 rounded-full bg-orange-50">
            <i class="mdi mdi-xml mdi-24px text-primary"></i>
          </div>
          <h1 class="text-primary text-xl">Sitemap</h1>
        </div>
        <div
          class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
        ></div>
      </a>
      <a
        href="https://echappee-copro.org/robots.txt"
        class="flex flex-col justify-between overflow-hidden text-center transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
      >
        <div class="p-5">
          <div class="w-10 h-10 md:mb-8 rounded-full bg-orange-50">
            <i class="mdi mdi-robot-outline mdi-24px text-primary"></i>
          </div>
          <h1 class="text-primary text-xl">Robots</h1>
        </div>
        <div
          class="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100"
        ></div>
      </a>
    </div>
  </div>
</template>
