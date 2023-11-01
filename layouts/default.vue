<template>
  <div>
    <!-- NAVBARZ -->
    <nav
      class="header top-0 fixed z-50 opacity-100 bg-primary w-full drop-shadow-xl"
      :class="
        { 'is-hidden': !showHeader } && open
          ? 'bg-grey-900 opacity-25'
          : 'opacity-100'
      "
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
          <h1 class="text-white text-lg font-bold uppercase hidden lg:block">
            Faciliter les projets collectifs en copropriété.
          </h1>
        </div>

        <button
          type="button"
          class="inline-flex items-center p-2 transition hover:scale-110 duration-300 hover:pulse text-white xl:hidden"
          @click="drawer()"
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
      :class="open ? 'navbar-open' : 'navbar-close'"
      class="navbar z-50 w-80 absolute overflow-x-scroll bg-gray-700 top-0 h-screen transition-transform -translate-x-full bg-primary"
    >
      <h5
        id="drawer-navigation-label"
        class="text-base font-semibold text-white uppercase"
      >
        Menu
      </h5>
      <button
        type="button"
        @click="drawer()"
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
    <main :class="open ? 'bg-grey-900 opacity-25' : 'opacity-100'">
      <div class="pt-32 bg-primary"></div>
      <NuxtPage />
    </main>
    <!-- FOOTER -->
    <footer
      class="p-4 bg-primary"
      :class="open ? 'bg-grey-900 opacity-25' : 'opacity-100'"
    >
      <div
        class="container px-5 py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
      >
        <div
          class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left"
        >
          <NuxtLink
            to="/"
            class="flex items-center md:justify-start justify-center transition delay-100 hover:scale-105 duration-300"
          >
            <img
              src="~\assets\img\logo-nav.png"
              class="h-24 mr-3"
              alt="L'échappée des copropriétés logo"
            />
          </NuxtLink>
        </div>
        <div
          class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center"
        >
          <div class="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2
              class="title-font font-medium text-white tracking-widest text-sm mb-3 underline"
            >
              PAGES
            </h2>
            <nav class="list-none mb-10">
              <li>
                <NuxtLink
                  to="/"
                  class="text-white hover:text-grey-200 hover:underline hover:scale-105 duration-300 hover:animate-pulse"
                  >Accueil</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/blog"
                  class="text-white hover:text-grey-200 hover:underline hover:scale-105 duration-300 hover:animate-pulse"
                  >Blog</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/videotheque"
                  class="text-white hover:text-grey-200 hover:underline hover:scale-105 duration-300 hover:animate-pulse"
                  >Vidéothèque</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/contact"
                  class="text-white hover:text-grey-200 hover:underline hover:scale-105 duration-300 hover:animate-pulse"
                  >Contact</NuxtLink
                >
              </li>
            </nav>
          </div>
          <div class="lg:w-1/2 md:w-1/2 w-full px-4">
            <h2
              class="title-font font-medium text-white tracking-widest text-sm mb-3 underline"
            >
              SITEWEB
            </h2>
            <nav class="list-none mb-10">
              <li>
                <NuxtLink
                  to="/plan"
                  class="text-white hover:text-grey-200 hover:underline hover:scale-105 duration-300 hover:animate-pulse"
                  >Plan du site</NuxtLink
                >
              </li>
              <li>
                <NuxtLink
                  to="/mentions_legales"
                  class="text-white hover:text-grey-200 hover:underline hover:scale-105 duration-300 hover:animate-pulse"
                  >Mentions Légales</NuxtLink
                >
              </li>
              <li>
                <a
                  href="http://www.echappee-copro.org/sitemap.xml"
                  class="text-white hover:text-grey-200 hover:underline hover:scale-105 duration-300 hover:animate-pulse"
                  >Sitemap</a
                >
              </li>
              <li>
                <a
                  href="http://www.echappee-copro.org/robots.txt"
                  class="text-white hover:text-grey-200 hover:underline hover:scale-105 duration-300 hover:animate-pulse"
                  >Robots</a
                >
              </li>
            </nav>
          </div>
        </div>
      </div>
      <hr class="border-white sm:mx-auto" />
      <div class="bg-primary pt-4">
        <div
          class="bg-primary container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row"
        >
          <p class="text-white text-sm text-center sm:text-left">
            © {{ new Date().getFullYear() }} ~ L'ÉCHAPPÉE DES COPROPRIÉTÉS —
            <a
              href="https://mazzar.fr"
              rel="noopener noreferrer"
              class="text-white ml-1 hover:text-grey-200 hover:underline hover:scale-105 duration-300 hover:animate-pulse"
              target="_blank"
              >@MazzaR</a
            >
          </p>
          <span class="inline-flex sm:ml-auto justify-center sm:justify-start">
            <a
              class="block px-2 transition hover:scale-125 duration-300 hover:animate-pulse text-white text-lg"
              href="https://www.linkedin.com/company/l-echappee-des-coproprietes?trk=public_profile_topcard_current_company"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="mdi mdi-24px mdi-linkedin"> </span>
            </a>
            <a
              class="block px-2 transition hover:scale-125 duration-300 hover:animate-pulse text-white text-lg"
              href="https://www.facebook.com/manon.leroy.7355"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="mdi mdi-24px mdi-facebook"> </span>
            </a>
            <a
              class="block px-2 transition hover:scale-125 duration-300 hover:animate-pulse text-white text-lg"
              href="https://www.youtube.com/channel/UCWxYK7EayDD5lYdjLSNW-lw"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span class="mdi mdi-24px mdi-youtube"> </span>
            </a>
          </span>
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
});
</script>
<script>
export default {
  data: () => ({
    showHeader: true,
    lastScrollPosition: 0,
    scrollOffset: 128,
    open: false,
  }),
  mounted() {
    this.lastScrollPosition = window.pageYOffset;
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    drawer() {
      this.open = !this.open;
    },
    onScroll() {
      if (window.pageYOffset < 0) {
        return;
      }
      if (
        Math.abs(window.pageYOffset - this.lastScrollPosition) <
        this.scrollOffset
      ) {
        return;
      }
      this.showHeader = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>
<style scoped>
.header {
  transform: translateY(0);
  transition: transform 300ms linear;
}

.header.is-hidden {
  transform: translateY(-100%);
}
.navbar {
  transition: all 330ms ease-out;
}

.navbar-open {
  transform: translateX(0%);
}
.navbar-close {
  transform: translateX(-100%);
}
</style>
