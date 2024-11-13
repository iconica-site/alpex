/** @type {NodeListOf<HTMLButtonElement>} */
const removeButtons = document.querySelectorAll(".cart-actions__remove");
/** @type {HTMLUListElement} */
const cartList = document.querySelector(".cart-list");

removeButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    /** @type {{target: HTMLElement}} */
    const { target } = event;
    const cartItem = target.closest(".cart-list__item");

    cartItem?.remove();
    cartList?.dispatchEvent(new Event("change"));
  });
});
