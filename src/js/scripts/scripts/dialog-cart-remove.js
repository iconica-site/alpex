/** @type {HTMLDialogElement} */
const cartDialog = document.querySelector(".cart-dialog");

cartDialog?.addEventListener("click", (event) => {
  /** @type {{target: HTMLElement}} */
  const { target } = event;

  if (target.closest(".cart-dialog-product__button")) {
    const product = target.closest(".cart-dialog-product");

    product?.remove();
  }
});
