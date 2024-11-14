/** @type {HTMLUListElement} */
const products = document.querySelector(".products-list");
/** @type {NodeListOf<HTMLButtonElement>} */
const buttons = document.querySelectorAll("[data-grid]");

if (products && buttons.length) {
  buttons.forEach(button => {
    const { dataset } = button;
    const { grid } = dataset;

    button.addEventListener("click", () => {
      products.classList.toggle("products-list--list", grid === "list");
      localStorage.setItem("products-grid", grid);

      buttons.forEach(button => {
        button.classList.toggle("catalog-actions__button--active", button.dataset.grid === grid);
      });
    });
  });
}
