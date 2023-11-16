<template>
  <section class="bg-white mx-auto pb-24">
    <div
      class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 grid md:grid-cols-2 sm:py-16 lg:px-6"
    >
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-primary">
        Ils·Elles nous font confiance :
      </h2>
    </div>
    <div class="mx-auto max-w-screen-2xl pt-8 sm:pt-16 px-4 lg:px-6">
      <swiper
        class="swiper"
        :loop="false"
        :autoplay="true"
        :pagination="true"
        :grabCursor="true"
        :breakpoints="{
          1500: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          600: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          500: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          430: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          300: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }"
      >
        <swiper-slide v-for="partenaire in partenaires" :key="partenaire.id">
          <a :href="partenaire.lien" target="_blank" rel="noopener noreferrer">
            <div
              class="flex h-[150px] w-[150px] items-center justify-center rounded-lg m-4"
            >
              <NuxtImg
                loading="lazy"
                class="h-[150px] w-[150px] object-cover transition delay-100 hover:scale-110 duration-300"
                :src="partenaire.img"
                :alt="partenaire.nom"
              />
            </div>
          </a>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      partenaires: [
        {
          nom: 'Fondation Abbé Pierre',
          img: '/img/logo/abbe-pierre.png',
          lien: 'https://www.fondation-abbe-pierre.fr',
          id: 1,
        },
        {
          nom: 'Fondation de France',
          img: '/img/logo/fondationdefrance.png',
          lien: 'https://www.fondationdefrance.org',
          id: 2,
        },
        {
          nom: 'Leroy Merlin Source',
          img: '/img/logo/leroy-merlin-source.png',
          lien: 'https://www.leroymerlinsource.fr/',
          id: 3,
        },
        {
          nom: 'Eau et vie',
          img: '/img/logo/eauetvie.png',
          lien: 'https://eauetvie.fr',
          id: 4,
        },
        {
          nom: 'Ashoka',
          img: '/img/logo/ashoka.png',
          lien: 'https://www.ashoka.org',
          id: 4,
        },
        {
          nom: 'Agglopole',
          img: '/img/logo/agglopole.png',
          lien: 'https://www.agglopole.fr',
          id: 5,
        },
        {
          nom: 'Erasmus +',
          img: '/img/logo/erasmus+.png',
          lien: 'https://info.erasmusplus.fr',
          id: 6,
        },
        {
          nom: 'Gefosat',
          img: '/img/logo/gefosat.png',
          lien: 'https://www.gefosat.org',
          id: 7,
        },
        {
          nom: 'Urbanis',
          img: '/img/logo/urbanis.png',
          lien: 'https://urbanis.fr',
          id: 8,
        },
        {
          nom: 'Toulouse Métropole',
          img: '/img/logo/toulouse.png',
          lien: 'https://metropole.toulouse.fr',
          id: 9,
        },
        {
          nom: 'Ville de Lille',
          img: '/img/logo/lille.png',
          lien: 'https://www.lille.fr',
          id: 10,
        },
        {
          nom: 'Sete',
          img: '/img/logo/sete.png',
          lien: 'https://www.sete.fr',
          id: 11,
        },
        {
          nom: 'Palanca',
          img: '/img/logo/palanca.png',
          lien: 'https://palanca.fr',
          id: 12,
        },
        {
          nom: 'Plaine Commune',
          img: '/img/logo/plainecommune.png',
          lien: 'https://plainecommune.fr',
          id: 13,
        },
      ],
    }
  },
}
</script>
