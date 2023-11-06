<template>
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
    <swiper-slide
      ><NuxtImg
        loading="lazy"
        class="object-cover transition delay-100 hover:scale-110 duration-300 m-5"
        src="/img/logo/abbe-pierre.png"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><NuxtImg
        loading="lazy"
        class="object-cover transition delay-100 hover:scale-110 duration-300 m-5"
        src="/img/logo/fondation2france.png"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><NuxtImg
        loading="lazy"
        class="object-cover transition delay-100 hover:scale-110 duration-300 m-5"
        src="/img/logo/eauetvie.png"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><NuxtImg
        loading="lazy"
        class="object-cover transition delay-100 hover:scale-110 duration-300 m-5"
        src="/img/logo/ashoka.png"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><NuxtImg
        loading="lazy"
        class="object-cover transition delay-100 hover:scale-110 duration-300 m-5"
        src="/img/logo/agglopole.png"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><NuxtImg
        loading="lazy"
        class="object-cover transition delay-100 hover:scale-110 duration-300 m-5"
        src="/img/logo/erasmus+.png"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><NuxtImg
        loading="lazy"
        class="object-cover transition delay-100 hover:scale-110 duration-300 m-5"
        src="/img/logo/gefosat.png"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><NuxtImg
        loading="lazy"
        class="object-cover transition delay-100 hover:scale-110 duration-300 m-5"
        src="/img/logo/leroy-merlin-source.png"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><NuxtImg
        loading="lazy"
        class="object-cover transition delay-100 hover:scale-110 duration-300 m-5"
        src="/img/logo/lille.png"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><NuxtImg
        loading="lazy"
        class="object-cover transition delay-100 hover:scale-110 duration-300 m-5"
        src="/img/logo/toulouse.png"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><NuxtImg
        loading="lazy"
        class="object-cover transition delay-100 hover:scale-110 duration-300 m-5"
        src="/img/logo/sete.png"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><NuxtImg
        loading="lazy"
        class="object-cover transition delay-100 hover:scale-110 duration-300 m-5"
        src="/img/logo/palanca.png"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><NuxtImg
        loading="lazy"
        class="object-cover transition delay-100 hover:scale-110 duration-300 m-5"
        src="/img/logo/plainecommune.png"
        alt=""
    /></swiper-slide>
    <swiper-slide
      ><NuxtImg
        loading="lazy"
        class="object-cover transition delay-100 hover:scale-110 duration-300 m-5"
        src="/img/logo/urbanis.png"
        alt=""
    /></swiper-slide>
  </swiper>
</template>
