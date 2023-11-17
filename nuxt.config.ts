// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@pinia-plugin-persistedstate/nuxt",
    "nuxt-delay-hydration",
    "@nuxt/image",
    "nuxt-simple-robots",
    "nuxt-simple-sitemap",
    "nuxt-schema-org",
    "nuxt-swiper",
  ],
  delayHydration: {
    mode: "manual",
  },
  vite: { ssr: { noExternal: ["moment"] } },
  nitro: { preset: "netlify-edge" },
  // nitro: { preset: "node" },
  // nitro: { preset: "node-cluster" },
  swiper: {
    prefix: "Swiper",
    styleLang: "css",
  },
  devtools: { enabled: true },
  css: ["~/assets/css/styles.css", "@mdi/font/css/materialdesignicons.min.css"],
  site: {
    url: "https://echappee-copro.org/",
    name: "L'Échappée des copropriétés",
  },
  app: {
    head: {
      titleTemplate: "%s - L'Échappée des copropriétés",
      htmlAttrs: {
        lang: "fr",
      },

      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "L’association l’Échappée des Copropriétés est née de « l’Échappée des Copropriétés en roue libre », un projet autofinancé et mené par Manon LEROY durant l’été 2017. Après quatre années à suivre des copropriétaires avec l'Association des Responsables de Copropriété (ARC), elle constate des manques dans les politiques publiques, la loi et l’accompagnement des copropriétés.",
        },
        {
          hid: "keywords",
          name: "keywords",
          content:
            "Copropriétés, L'Échappée des copropriétés, copro,Toulouse, France,Association des Responsables de Copropriété (ARC), ARC,politiques publiques, la loi, accompagnement des copropriétés, aides copropriétés",
        },
        { hid: "language", name: "language", content: "French" },
        { hid: "revisit-after", name: "revisit-after", content: "1 days" },
        { name: "format-detection", content: "telephone=no" },
        // Open Graph / Facebook
        { hid: "og:type", property: "og:type", content: "website" },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://www.echappee-copro.org",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "L'Échappée des copropriétés",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "L’association l’Échappée des Copropriétés est née de « l’Échappée des Copropriétés en roue libre », un projet autofinancé et mené par Manon LEROY durant l’été 2017. Après quatre années à suivre des copropriétaires avec l'Association des Responsables de Copropriété (ARC), elle constate des manques dans les politiques publiques, la loi et l’accompagnement des copropriétés.",
        },
        // Twitter
        {
          hid: "twitter:card",
          property: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:url",
          property: "twitter:url",
          content: "https://www.echappee-copro.org",
        },
        {
          hid: "twitter:title",
          property: "twitter:title",
          content: "L'Échappée des copropriétés",
        },
        {
          hid: "twitter:description",
          property: "twitter:description",
          content:
            "L’association l’Échappée des Copropriétés est née de « l’Échappée des Copropriétés en roue libre », un projet autofinancé et mené par Manon LEROY durant l’été 2017. Après quatre années à suivre des copropriétaires avec l'Association des Responsables de Copropriété (ARC), elle constate des manques dans les politiques publiques, la loi et l’accompagnement des copropriétés.",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "~/public/favicon.ico" },
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  plugins: [],
});
