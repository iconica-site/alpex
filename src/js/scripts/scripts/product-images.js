/** @type {NodeListOf<HTMLElement>} */
const productImages = document.querySelectorAll(".product__main .product-slider");

productImages.forEach(images => {
  images.addEventListener("mousemove", (event) => {
    /** @type {{layerX: number, layerY: number, target: HTMLElement}} */
    const { offsetX, offsetY, target } = event;
    const { width, height } = images.getBoundingClientRect();

    if (target.closest(".product-slider__wrapper")) {
      const x = offsetX * 100 / width;
      const y = offsetY * 100 / height;

      images.style.setProperty("--x", x);
      images.style.setProperty("--y", y);
    }
  });

  images.addEventListener("mouseleave", () => {
    images.style.removeProperty("--x");
    images.style.removeProperty("--y");
  });
});
