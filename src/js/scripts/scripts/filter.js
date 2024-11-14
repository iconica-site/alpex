const MIN_WIDTH_992_PX = matchMedia("(min-width: 992.1px)");
/** @type {HTMLDialogElement} */
const filterDialog = document.querySelector(".filter-dialog");

if (filterDialog) {
  MIN_WIDTH_992_PX.addEventListener("change", (event) => {
    const { matches } = event;

    if (matches && filterDialog.hasAttribute("open")) filterDialog.click();
  });
}
