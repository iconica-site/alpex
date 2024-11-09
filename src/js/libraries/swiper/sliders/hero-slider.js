import Swiper from "swiper";
import { Autoplay, EffectFade, Keyboard, Navigation, Pagination, } from "swiper/modules";

const heroSlider = document.querySelector(".hero-slider");

if (heroSlider) {
  const swiper = new Swiper(heroSlider, {
    modules: [Autoplay, EffectFade, Keyboard, Navigation, Pagination,],
    autoplay: {
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    fadeEffect: {
      crossFade: true,
    },
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    navigation: {
      enabled: true,
      nextEl: ".hero-arrows__button--next",
      prevEl: ".hero-arrows__button--prev",
    },
    pagination: {
      clickable: true,
      el: ".hero-slider__pagination",
      enabled: true,
    },
    effect: "fade",
    loop: true,
    loopAddBlankSlides: true,
  });
}
