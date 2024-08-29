<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-lg px-4 md:px-8">
      <div class="grid gap-8 sm:grid-cols-2">
        <div
          class="flex rounded-lg items-center justify-center bg-primary backdrop-blur-xl drop-shadow-2xl opacity-95"
        >
          <img
            src="/img/logo-nav.png"
            class="w-3/4 items-center justify-center"
          />
        </div>
        <div
          class="flex flex-col items-center justify-center sm:items-start md:py-24 lg:py-32"
        >
          <p
            class="mb-4 text-sm font-semibold uppercase text-primary md:text-base"
          >
            Error 404
          </p>
          <h1
            class="mb-2 text-center text-2xl font-bold text-gray-800 sm:text-left md:text-3xl"
          >
            Page not found
          </h1>

          <p
            class="mb-4 text-center text-gray-500 sm:text-left md:mb-8 md:text-lg"
          >
            La page que vous recherchez n'existe pas
          </p>

          <nav class="flex gap-4 sm:block sm:space-y-1 md:space-y-2">
            <div>
              <NuxtLink
                to="/"
                class="inline-block text-sm text-primary transition duration-100 hover:text-secondary active:text-indigo-700 md:text-base"
              >
                Accueil
              </NuxtLink>
            </div>

            <div>
              <NuxtLink
                to="/blog"
                class="inline-block text-sm text-primary transition duration-100 hover:text-secondary active:text-indigo-700 md:text-base"
              >
                Blog
              </NuxtLink>
            </div>
            <div>
              <NuxtLink
                to="/videotheque"
                class="inline-block text-sm text-primary transition duration-100 hover:text-secondary active:text-indigo-700 md:text-base"
              >
                Vidéothèque
              </NuxtLink>
            </div>
            <div>
              <NuxtLink
                to="/contact"
                class="inline-block text-sm text-primary transition duration-100 hover:text-secondary active:text-indigo-700 md:text-base"
              >
                Contact
              </NuxtLink>
            </div>
            <ul class="inline-flex justify-center pt-4">
              <li>
                <a
                  class="block pr-2 transition hover:scale-125 duration-300 hover:animate-pulse text-primary text-lg"
                  href="https://www.linkedin.com/company/l-echappee-des-coproprietes?trk=public_profile_topcard_current_company"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="mdi mdi-36px mdi-linkedin"></span>
                </a>
              </li>
              <li>
                <a
                  class="block px-2 transition hover:scale-125 duration-300 hover:animate-pulse text-primary text-lg"
                  href="https://www.facebook.com/manon.leroy.7355"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="mdi mdi-36px mdi-facebook"></span>
                </a>
              </li>
              <li>
                <a
                  class="block pl-2 transition hover:scale-125 duration-300 hover:animate-pulse text-primary text-lg"
                  href="https://www.youtube.com/channel/UCWxYK7EayDD5lYdjLSNW-lw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span class="mdi mdi-36px mdi-youtube"></span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>
