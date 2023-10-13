<template>
  <div>
    <!-- NAVBARZ -->
    <nav
      id="navigation"
      class="bg-primary w-full fixed z-50 drop-shadow-xl hover:drop-shadow-2xl transition-all duration-500"
    >
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <NuxtLink
          class="flex items-center transition delay-100 hover:scale-105 duration-300"
          to="/"
        >
          <img
            src="~\assets\img\logo-nav.png"
            class="h-24 mr-3"
            alt="L'échappée des copropriétés logo"
          />
        </NuxtLink>
        <div>
          <h1
            class="text-white text-lg font-bold uppercase hidden max-sm:block md:block"
          >
            Faciliter les projets collectifs en copropriété.
          </h1>
        </div>

        <button
          type="button"
          class="inline-flex items-center p-2 transition hover:scale-110 duration-300 hover:pulse text-white xl:hidden"
          data-drawer-target="drawer-navigation"
          data-drawer-toggle="drawer-navigation"
          aria-controls="drawer-navigation"
        >
          <svg
            class="w-8 h-8"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div class="hidden w-full xl:block xl:w-auto">
          <ul
            class="flex flex-col mt-4 xl:flex-row xl:mt-0 md:border-0 xl:bg-transparent"
          >
            <li>
              <NuxtLink
                to="/blog"
                class="block py-2 pl-3 pr-4 transition hover:underline hover:scale-105 duration-300 hover:animate-pulse text-white text-lg"
                >Blog</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/videotheque"
                class="block py-2 pl-3 pr-4 transition hover:underline hover:scale-105 duration-300 hover:animate-pulse text-white text-lg"
                >Vidéothèque</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/contact"
                class="block py-2 pl-3 pr-4 transition hover:underline hover:scale-105 duration-300 hover:animate-pulse text-white text-lg"
                >Contact</NuxtLink
              >
            </li>
          </ul>
        </div>
        <div class="hidden w-full 2xl:block 2xl:w-auto">
          <ul
            class="flex flex-col mt-4 2xl:flex-row 2xl:mt-0 2xl:border-0 2xl:bg-transparent"
          >
            <li>
              <a
                class="block py-2 px-2 transition hover:scale-125 duration-300 hover:animate-pulse text-white text-lg"
                href="https://www.linkedin.com/company/l-echappee-des-coproprietes?trk=public_profile_topcard_current_company"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="mdi mdi-24px mdi-linkedin"> </span>
              </a>
            </li>
            <li>
              <a
                class="block py-2 px-2 transition hover:scale-125 duration-300 hover:animate-pulse text-white text-lg"
                href="https://www.facebook.com/manon.leroy.7355"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="mdi mdi-24px mdi-facebook"> </span>
              </a>
            </li>
            <li>
              <a
                class="block py-2 px-2 transition hover:scale-125 duration-300 hover:animate-pulse text-white text-lg"
                href="https://www.youtube.com/channel/UCWxYK7EayDD5lYdjLSNW-lw"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="mdi mdi-24px mdi-youtube"> </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- DRAWER -->
    <div
      id="drawer-navigation"
      class="fixed top-0 left-0 z-50 drop-shadow-xl hover:drop-shadow-2xl h-screen p-4 overflow-y-auto transition-transform -translate-x-full bg-primary w-80"
      tabindex="-1"
      aria-labelledby="drawer-navigation-label"
    >
      <h5
        id="drawer-navigation-label"
        class="text-base font-semibold text-white uppercase"
      >
        Menu
      </h5>
      <button
        type="button"
        data-drawer-hide="drawer-navigation"
        aria-controls="drawer-navigation"
        class="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          class="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>
      <NuxtLink
        class="transition delay-100 hover:scale-110 duration-300"
        to="/"
      >
        <img
          src="~\assets\img\logo-nav.png"
          class="h-24"
          alt="L'échappée des copropriétés logo"
        />
      </NuxtLink>
      <div class="py-4 overflow-y-auto">
        <ul class="space-y-2 font-medium">
          <li>
            <NuxtLink
              class="flex items-center p-2 text-white rounded-lg"
              to="blog"
            >
              <span class="mdi mdi-border-color mdi-24px text-white"></span>
              <span class="ml-3 text-white">Blog</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="flex items-center p-2 text-white rounded-lg"
              to="blog"
            >
              <span class="mdi mdi-video mdi-24px text-white"></span>
              <span class="ml-3 text-white">Vidéothèque</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              class="flex items-center p-2 text-white rounded-lg"
              to="blog"
            >
              <span class="mdi mdi-email-outline mdi-24px text-white"></span>
              <span class="ml-3 text-white">Contact</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="w-auto block">
        <ul class="flex">
          <li>
            <a
              class="block py-2 px-2 transition hover:scale-125 duration-300 hover:animate-pulse text-white text-lg"
              href="https://www.linkedin.com/company/l-echappee-des-coproprietes?trk=public_profile_topcard_current_company"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="mdi mdi-24px mdi-linkedin"> </span>
            </a>
          </li>
          <li>
            <a
              class="block py-2 px-2 transition hover:scale-125 duration-300 hover:animate-pulse text-white text-lg"
              href="https://www.facebook.com/manon.leroy.7355"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="mdi mdi-24px mdi-facebook"> </span>
            </a>
          </li>
          <li>
            <a
              class="block py-2 px-2 transition hover:scale-125 duration-300 hover:animate-pulse text-white text-lg"
              href="https://www.youtube.com/channel/UCWxYK7EayDD5lYdjLSNW-lw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="mdi mdi-24px mdi-youtube"> </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <main>
      <slot />
    </main>
    <!-- FOOTER -->
    <footer class="p-4 bg-primary sm:p-6">
      <div class="mx-auto max-w-screen-xl">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <NuxtLink to="/" class="flex items-center">
              <img
                src="~\assets\img\logo-nav.png"
                class="h-24 mr-3"
                alt="L'échappée des copropriétés logo"
              />
            </NuxtLink>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <ul class="text-white pt-6">
                <li class="mb-4">
                  <NuxtLink
                    to="/"
                    class="hover:underline hover:scale-105 duration-300 hover:animate-pulse"
                    >Accueil</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/blog"
                    class="hover:underline hover:scale-105 duration-300 hover:animate-pulse"
                    >Blog</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div>
              <ul class="text-white pt-6">
                <li class="mb-4">
                  <NuxtLink
                    to="/videotheque"
                    class="hover:underline hover:scale-105 duration-300 hover:animate-pulse"
                    >Vidéothèque</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/contact"
                    class="hover:underline hover:scale-105 duration-300 hover:animate-pulse"
                    >Nous contactez</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div>
              <ul class="text-white pt-6">
                <li class="mb-4">
                  <NuxtLink
                    to="/plan"
                    class="hover:underline hover:scale-105 duration-300 hover:animate-pulse"
                    >Plan du site</NuxtLink
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/plan"
                    class="hover:underline hover:scale-105 duration-300 hover:animate-pulse"
                  ></NuxtLink>
                  <NuxtLink to="/mentions_legales">Mentions Légales</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-white sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm text-white sm:text-center"
            >{{ new Date().getFullYear() }} ~ L'ÉCHAPPÉE DES COPROPRIÉTÉS
          </span>
          <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <ul
              class="flex flex-col mt-4 2xl:flex-row 2xl:mt-0 2xl:border-0 2xl:bg-transparent"
            >
              <li>
                <a
                  class="block py-2 px-2 transition hover:scale-125 duration-300 hover:animate-pulse text-white text-lg"
                  href="https://www.linkedin.com/company/l-echappee-des-coproprietes?trk=public_profile_topcard_current_company"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="mdi mdi-24px mdi-linkedin"> </span>
                </a>
              </li>
              <li>
                <a
                  class="block py-2 px-2 transition hover:scale-125 duration-300 hover:animate-pulse text-white text-lg"
                  href="https://www.facebook.com/manon.leroy.7355"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="mdi mdi-24px mdi-facebook"> </span>
                </a>
              </li>
              <li>
                <a
                  class="block py-2 px-2 transition hover:scale-125 duration-300 hover:animate-pulse text-white text-lg"
                  href="https://www.youtube.com/channel/UCWxYK7EayDD5lYdjLSNW-lw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="mdi mdi-24px mdi-youtube"> </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import {
  initAccordions,
  initCarousels,
  initCollapses,
  initDials,
  initDismisses,
  initDrawers,
  initDropdowns,
  initModals,
  initPopovers,
  initTabs,
  initTooltips,
} from "flowbite";
onMounted(() => {
  initAccordions();
  initCarousels();
  initCollapses();
  initDials();
  initDismisses();
  initDrawers();
  initDropdowns();
  initModals();
  initPopovers();
  initTabs();
  initTooltips();
  const isVisible = ref(false);
  const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
  };
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos || isVisible.value) {
      document.getElementById("navigation").style.top = "0";
    } else {
      document.getElementById("navigation").style.top = "-128px";
      // isVisible.value = false;
    }
    prevScrollpos = currentScrollPos;
  };
});
</script>