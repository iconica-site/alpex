import Swiper from "swiper";
import { Keyboard, Navigation, Thumbs, } from "swiper/modules";

const productSliders = document.querySelectorAll(".product__sliders");

productSliders.forEach(sliders => {
  const productSlider = sliders.querySelector(".product-slider");
  const productThumbs = sliders.querySelector(".product-thumbs__slider");

  if (productSlider && productThumbs) {
    const prev = sliders.querySelector(".product-thumbs__button--prev");
    const next = sliders.querySelector(".product-thumbs__button--next");

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
        nextEl: next,
        prevEl: prev,
      },
      thumbs: {
        swiper: thumbs,
      },
      spaceBetween: 30,
      rewind: true,
    });
  }
});
