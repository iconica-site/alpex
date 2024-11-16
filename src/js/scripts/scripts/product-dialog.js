import { Scrolling } from "../../modules/scrolling.js";

/** @type {HTMLElement} */
const productDialog = document.querySelector(".product-dialog");

if (productDialog) {
  document.addEventListener("click", (event) => {
    /** @type {{target: HTMLElement}} */
    const { target } = event;

    if (target.closest(".product-card__view")) {
      productDialog.classList.add("product-dialog--show");
      Scrolling.lock();
    } else if (target.closest(".product__close")) {
      productDialog.classList.remove("product-dialog--show");
      Scrolling.unlock();
    } else if (!target.closest(".product-dialog__inner")) {
      productDialog.classList.remove("product-dialog--show");
      Scrolling.unlock();
    }
  });

  document.addEventListener("keydown", (event) => {
    const { code } = event;

    if (code === "Escape") {
      productDialog.classList.remove("product-dialog--show");
      Scrolling.unlock();
    }
  });
}
