import Swiper from "swiper";
import { Keyboard, Navigation, } from "swiper/modules";

const productsSliders = document.querySelectorAll(".products__slider");

productsSliders.forEach(slider => {
  const productsSlider = slider.querySelector(".products-slider");
  const prev = slider.querySelector(".products__slider-arrow--prev");
  const next = slider.querySelector(".products__slider-arrow--next");

  if (productsSlider) {
    const swiper = new Swiper(productsSlider, {
      modules: [Keyboard, Navigation],
      keyboard: {
        enabled: true,
        pageUpDown: false,
      },
      navigation: {
        enabled: true,
        nextEl: next,
        prevEl: prev,
      },
      breakpoints: {
        "450.1": {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        "768.1": {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        "992.1": {
          slidesPerView: 4,
          spaceBetween: 26,
        },
      },
      slidesPerView: 1,
      spaceBetween: 20,
      rewind: true,
    });
  }
});
