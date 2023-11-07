<template>
  <div class="relative z-0">
    <!-- NAVBARZ -->
    <nav
      :class="{ 'hidden-navbar': !showNavbar }"
      class="navbar inset-x-0 top-0 fixed z-40 bg-primary w-full opacity-95 rounded-b-lg drop-shadow-2xl"
    >
      <div
        class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
      >
        <NuxtLink
          class="flex items-center transition delay-100 hover:scale-105 duration-300"
          to="/"
        >
          <NuxtImg
            loading="lazy"
            src="/img/logo-nav.png"
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
        <NuxtImg
          loading="lazy"
          src="/img/logo-nav.png"
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
    <!-- RGPD -->
    <RGPD />
    <!-- FOOTER -->
    <LazyFooter />
  </div>
</template>

<script setup>
</script>
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
