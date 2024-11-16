import Swiper from "swiper";
import { Keyboard, Navigation, Thumbs, } from "swiper/modules";

const productSlider = document.querySelector(".product-slider");
const productThumbs = document.querySelector(".product-thumbs__slider");

if (productSlider && productThumbs) {
  const thumbs = new Swiper(productThumbs, {
    slidesPerView: 4,
    spaceBetween: 10,
    rewind: true,
  });

  const swiper = new Swiper(productSlider, {
    modules: [Keyboard, Navigation, Thumbs,],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    navigation: {
      enabled: true,
      nextEl: ".product-thumbs__button--next",
      prevEl: ".product-thumbs__button--prev",
    },
    thumbs: {
      swiper: thumbs,
    },
    spaceBetween: 30,
    rewind: true,
  });
}
