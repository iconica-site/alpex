import { Move } from "../../modules/move.js";

/** @type {HTMLElement} */
const headerPagesMain = document.querySelector(".header-pages");
/** @type {HTMLElement} */
const headerPagesContainer = document.querySelector(".header-nav__pages");

if (headerPagesMain && headerPagesContainer) {
  const move = new Move({
    destinationSelector: ".header-nav__pages",
    targetSelector: ".header-pages",
  });
}

/** @type {HTMLElement} */
const headerTelMain = document.querySelector(".header-tel");
/** @type {HTMLElement} */
const headerTelContainer = document.querySelector(".header-nav__tel");

if (headerTelMain && headerTelContainer) {
  const move = new Move({
    destinationSelector: ".header-nav__tel",
    targetSelector: ".header-tel",
  });
}

/** @type {HTMLElement} */
const headerCatalogMain = document.querySelector(".header-catalog");
/** @type {HTMLElement} */
const headerCatalogContainer = document.querySelector(".header-nav__catalog");

if (headerCatalogMain && headerCatalogContainer) {
  const move = new Move({
    destinationSelector: ".header-nav__catalog",
    targetSelector: ".header-catalog",
  });
}

/** @type {HTMLElement} */
const headerCartMain = document.querySelector(".header-cart");
/** @type {HTMLElement} */
const headerCartContainer = document.querySelector(".header-main__cart");

if (headerCartMain && headerCartContainer) {
  const move = new Move({
    destinationSelector: ".header-main__cart",
    targetSelector: ".header-cart",
  });
}
