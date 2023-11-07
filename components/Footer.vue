<template>
  <footer class="p-4 bg-primary rounded-t-lg opacity-95">
    <div
      class="container px-5 py-4 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col"
    >
      <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
        <NuxtLink
          to="/"
          class="flex items-center md:justify-start justify-center transition delay-100 hover:scale-105 duration-300"
        >
          <NuxtImg
            loading="lazy"
            src="/img/logo-nav.png"
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
</template>
