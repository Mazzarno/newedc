<template>
  <div class="bg-white py-6 sm:py-8 lg:py-12">
    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
      <div
        class="mb-4 flex flex-col items-center md:mb-8 lg:flex-row lg:justify-between"
      >
        <h2
          class="mb-2 text-center text-2xl font-bold text-gray-800 lg:mb-0 lg:text-3xl"
        >
          Ils·Elles nous font confiance :
        </h2>
      </div>

      <div
        :key="partenaire"
        class="grid grid-cols-2 gap-4 rounded-lg md:grid-cols-4 lg:gap-6"
      >
        <div v-for="partenaire in partenaires" :key="partenaire">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      partenaires: [
        {
          nom: "Fondation Abbé Pierre",
          img: "/img/logo/abbe-pierre.png",
          lien: "https://www.fondation-abbe-pierre.fr",
        },
        {
          nom: "Fondation de France",
          img: "/img/logo/fondationdefrance.png",
          lien: "https://www.fondationdefrance.org",
        },
        {
          nom: "Leroy Merlin Source",
          img: "/img/logo/leroy-merlin-source.png",
          lien: "https://www.leroymerlinsource.fr/",
        },
        {
          nom: "Eau et vie",
          img: "/img/logo/eauetvie.png",
          lien: "https://eauetvie.fr",
        },
        {
          nom: "Ashoka",
          img: "/img/logo/ashoka.png",
          lien: "https://www.ashoka.org",
        },
        {
          nom: "Agglopole",
          img: "/img/logo/agglopole.png",
          lien: "https://www.agglopole.fr",
        },
        {
          nom: "Erasmus +",
          img: "/img/logo/erasmus+.png",
          lien: "https://info.erasmusplus.fr",
        },
        {
          nom: "Agglopole",
          img: "/img/logo/agglopole.png",
          lien: "https://www.agglopole.fr",
        },
        {
          nom: "Gefosat",
          img: "/img/logo/gefosat.png",
          lien: "https://www.gefosat.org",
        },
        {
          nom: "Urbanis",
          img: "/img/logo/urbanis.png",
          lien: "https://urbanis.fr",
        },
        {
          nom: "Toulouse Métropole",
          img: "/img/logo/toulouse.png",
          lien: "https://metropole.toulouse.fr",
        },
        {
          nom: "Ville de Lille",
          img: "/img/logo/lille.png",
          lien: "https://www.lille.fr",
        },
        {
          nom: "Sete",
          img: "/img/logo/sete.png",
          lien: "https://www.sete.fr",
        },
        {
          nom: "Palanca",
          img: "/img/logo/palanca.png",
          lien: "https://palanca.fr",
        },
        {
          nom: "Plaine Commune",
          img: "/img/logo/plainecommune.png",
          lien: "https://plainecommune.fr",
        },
        {
          nom: "",
          img: "/img/logo/agglopole.png",
          lien: "https://www.agglopole.fr/",
        },
      ],
    };
  },
};
</script>

<style>
</style>

