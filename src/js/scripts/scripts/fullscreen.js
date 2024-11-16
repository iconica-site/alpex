/** @type {HTMLButtonElement} */
const fullButton = document.querySelector(".product-slider__full");
/** @type {HTMLElement} */
const produceSliders = fullButton?.closest(".product__sliders");

if (produceSliders) {
  fullButton.addEventListener("click", () => {
    document.fullscreenElement ? document.exitFullscreen() : produceSliders.requestFullscreen();
  });
}
