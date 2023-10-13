<template>
  <section class="text-gray-600 body-font relative z-0">
    <div class="bg-primary md:pt-32 pt-32"></div>
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1
          class="sm:text-3xl text-2xl font-medium title-font mb-4 text-primary"
        >
          Nous contactez
        </h1>
      </div>
      <div class="lg:w-1/2 md:w-2/3 mx-auto">
        <div>
          <form
            action="https://formsubmit.co/alexis-germain@live.fr"
            method="POST"
            class="flex flex-wrap -m-2"
          >
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="name" class="leading-7 text-sm text-gray-600"
                  >Nom</label
                >
                <input
                  type="text"
                  name="Nom"
                  ref="nom"
                  required
                  :rules="rules.name"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 shadow-md transition delay-100 hover:shadow-xl duration-300 hover:animate-pulse"
                />
              </div>
            </div>
            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600"
                  >Email</label
                >
                <input
                  type="email"
                  name="Email"
                  ref="email"
                  required
                  :rules="[rules.email]"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 shadow-md transition delay-100 hover:shadow-xl duration-300 hover:animate-pulse"
                />
              </div>
            </div>

            <div class="p-2 w-1/2">
              <div class="relative">
                <label for="sujet" class="leading-7 text-sm text-gray-600"
                  >Téléphone</label
                >
                <input
                  type="text"
                  name="Numéro_de_Téléphone"
                  ref="telephone"
                  required
                  :rules="rules.name"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 shadow-md transition delay-100 hover:shadow-xl duration-300 hover:animate-pulse"
                />
              </div>
            </div>

            <div class="p-2 w-full">
              <div class="relative">
                <label for="sujet" class="leading-7 text-sm text-gray-600"
                  >Sujet</label
                >
                <input
                  type="text"
                  name="Sujet"
                  ref="sujet"
                  mask="##########"
                  required
                  :rules="rules.name"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary text-base outline-none text-gray-700 py-1 px-3 leading-8 shadow-md transition delay-100 hover:shadow-xl duration-300 hover:animate-pulse"
                />
              </div>
            </div>

            <div class="p-2 w-full">
              <div class="relative">
                <label for="message" class="leading-7 text-sm text-gray-600"
                  >Message</label
                >
                <textarea
                  type="text"
                  name="message"
                  ref="message"
                  required
                  :rules="rules.name"
                  class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 ease-in-out shadow-md transition delay-100 hover:shadow-xl duration-300 hover:animate-pulse"
                ></textarea>
              </div>
            </div>
            <input type="hidden" name="_captcha" value="true" />
            <input type="text" name="_honey" style="display: none" />
            <input
              type="hidden"
              name="_next"
              value="http://www.echappee-copro.org/"
            />
            <div class="p-2 w-full">
              <button
                class="flex mx-auto text-white bg-primary border-0 py-2 px-8 focus:outline-none rounded text-lg shadow-md transition delay-100 hover:shadow-xl duration-300 hover:animate-pulse"
                color="primary"
                type="submit"
              >
                Envoyer
              </button>
            </div>
          </form>
          <div
            class="p-2 w-full pt-4 mt-8 border-t border-gray-200 text-center"
          >
            <p class="leading-normal my-5">Toulouse - 31000</p>
            <span class="inline-flex">
              <ul
                class="flex flex-col mt-4 2xl:flex-row 2xl:mt-0 2xl:border-0 2xl:bg-transparent"
              >
                <li>
                  <a
                    class="block py-2 px-2 transition hover:scale-125 duration-300 hover:animate-pulse text-primary text-lg"
                    href="https://www.linkedin.com/company/l-echappee-des-coproprietes?trk=public_profile_topcard_current_company"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="mdi mdi-36px mdi-linkedin"> </span>
                  </a>
                </li>
                <li>
                  <a
                    class="block py-2 px-2 transition hover:scale-125 duration-300 hover:animate-pulse text-primary text-lg"
                    href="https://www.facebook.com/manon.leroy.7355"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="mdi mdi-36px mdi-facebook"> </span>
                  </a>
                </li>
                <li>
                  <a
                    class="block py-2 px-2 transition hover:scale-125 duration-300 hover:animate-pulse text-primary text-lg"
                    href="https://www.youtube.com/channel/UCWxYK7EayDD5lYdjLSNW-lw"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span class="mdi mdi-36px mdi-youtube"> </span>
                  </a>
                </li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      form: false,
      rules: {
        name: [(val) => (val || "").length > 0 || "Ce champ est obligatoire"],
        email: (v) => (v || "").match(/@/) || "Entrer une adresse email valide",
      },
    };
  },
};
</script>



<style>
</style>
