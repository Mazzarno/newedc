<template>
  <div class="relative z-0">
    <!-- NAVBARZ -->
    <nav
      :class="{ 'hidden-navbar': !showNavbar }"
      class="navbar inset-x-0 top-0 fixed z-40 opacity-100 bg-primary w-full drop-shadow-xl opacity-95 rounded-b-2xl"
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
    <nav
      :class="openDrawer ? 'drawer-open' : 'drawer-close'"
      class="drawer w-80 z-50 fixed bg-primary top-0 h-screen drop-shadow-2xl opacity-95"
    >
      <div class="flex pr-2 justify-end">
        <button @click="drawer()" class="p-2 text-white text-xl font-bold">
          <i class="mdi mdi-close"></i>
        </button>
      </div>
      <NuxtLink
        class="transition delay-100 hover:scale-110 duration-300"
        to="/"
      >
        <img
          src="~\assets\img\logo-nav.png"
          class="h-24 items-center mx-auto"
          alt="L'échappée des copropriétés logo"
        />
      </NuxtLink>
      <div class="flex flex-col justify-around items-center h-5/6">
        <ul class="list-none text-white">
          <li class="my-8">
            <NuxtLink class="text-white" to="/">
              <span class="mdi mdi-home-outline mdi-24px text-white"></span>
              <span class="ml-3 text-white">Accueil</span>
            </NuxtLink>
          </li>
          <li class="my-8">
            <NuxtLink class="text-white" to="/blog">
              <span class="mdi mdi-border-color mdi-24px text-white"></span>
              <span class="ml-3 text-white">Blog</span>
            </NuxtLink>
          </li>
          <li class="my-8">
            <NuxtLink class="" to="blog">
              <span class="mdi mdi-video-outline mdi-24px text-white"></span>
              <span class="ml-3 text-white">Vidéothèque</span>
            </NuxtLink>
          </li>
          <li class="my-8">
            <NuxtLink class="text-white" to="/contact">
              <span class="mdi mdi-email-outline mdi-24px text-white"></span>
              <span class="ml-3 text-white">Contact</span>
            </NuxtLink>
          </li>
        </ul>
        <span class="inline-flex justify-center">
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
    </nav>
    <!-- MAIN -->
    <main>
      <div class="pt-32 bg-white"></div>
      <NuxtPage />
    </main>
    <!-- COOKIE BANNER -->
    <div class="mx-auto max-w-screen-2xl px-4 pb-4 md:px-8">
      <div
        class="relative flex flex-wrap rounded-lg bg-primary opacity-95 px-4 py-3 shadow-lg sm:flex-nowrap sm:items-center sm:justify-center sm:gap-3 sm:pr-8 md:px-8"
      >
        <div
          class="order-1 mb-2 inline-block w-11/12 max-w-screen-sm text-sm text-white sm:order-none sm:mb-0 sm:w-auto md:text-base"
        >
          This is a section of some simple filler text, also known as
          placeholder text.
        </div>

        <a
          href="#"
          class="order-last inline-block w-full whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2 text-center text-xs font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-700 focus-visible:ring active:bg-indigo-800 sm:order-none sm:w-auto md:text-sm"
          >Learn more</a
        >

        <div
          class="order-2 flex w-1/12 items-start justify-end sm:absolute sm:right-0 sm:order-none sm:mr-2 sm:w-auto xl:mr-3"
        >
          <button
            type="button"
            class="text-white transition duration-100 hover:text-indigo-100 active:text-indigo-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 xl:h-6 xl:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- FOOTER -->
    <footer class="p-4 bg-primary">
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
<script setup></script>
<script>
export default {
  data: () => ({
    showNavbar: true,
    lastScrollPosition: 0,
    scrollOffset: 128,
    openDrawer: false,
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
      this.openDrawer = !this.openDrawer;
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
      this.showNavbar = window.pageYOffset < this.lastScrollPosition;
      this.lastScrollPosition = window.pageYOffset;
    },
  },
};
</script>
<style scoped>
.navbar {
  transform: translateY(0);
  transition: transform 300ms linear;
}

.navbar.hidden-navbar {
  transform: translateY(-100%);
}
.drawer {
  transition: all 330ms ease-out;
}

.drawer-open {
  transform: translateX(0%);
}
.drawer-close {
  transform: translateX(-100%);
}
</style>
