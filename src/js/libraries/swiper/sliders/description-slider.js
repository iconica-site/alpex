import Swiper from "swiper";
import { Keyboard, Pagination, } from "swiper/modules";

const descriptionSlider = document.querySelector(".description-slider");

if (descriptionSlider) {
  const swiper = new Swiper(descriptionSlider, {
    modules: [Keyboard, Pagination],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    pagination: {
      clickable: true,
      el: ".description-slider__pagination",
      enabled: true,
    },
    loop: true,
    loopAddBlankSlides: true,
    spaceBetween: 15,
    rewind: true,
    autoHeight: true,
  });
}
