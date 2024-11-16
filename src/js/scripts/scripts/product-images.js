/** @type {HTMLElement} */
const productImages = document.querySelector(".product-slider");

if (productImages) {
  productImages.addEventListener("mousemove", (event) => {
    /** @type {{layerX: number, layerY: number, target: HTMLElement}} */
    const { offsetX, offsetY, target } = event;
    const { width, height } = productImages.getBoundingClientRect();

    if (target.closest(".product-slider__wrapper")) {
      const x = offsetX * 100 / width;
      const y = offsetY * 100 / height;

      productImages.style.setProperty("--x", x);
      productImages.style.setProperty("--y", y);
    }
  });

  productImages.addEventListener("mouseleave", () => {
    productImages.style.removeProperty("--x");
    productImages.style.removeProperty("--y");
  });
}
