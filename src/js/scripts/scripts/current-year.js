/** @type {HTMLSpanElement} */
const currentYearBlock = document.querySelector(".footer__current-year");

if (currentYearBlock) {
  const date = new Date();
  const year = date.getFullYear();

  currentYearBlock.textContent = year;
}
