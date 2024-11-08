import { Burger } from "../../modules/burger.js";

const burger = new Burger({
  a11y: {
    inertElementsSelectors: "[data-wrapper] > *:not([data-burger=\"menu\"])",
    moveMenu: true,
  }
});
