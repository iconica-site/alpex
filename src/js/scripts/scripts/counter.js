/** @type {NodeListOf<HTMLElement>} */
const counters = document.querySelectorAll("[data-counter]");
/** @type {HTMLUListElement} */
const cartList = document.querySelector(".cart-list");

counters.forEach(counter => {
  /** @type {HTMLInputElement} */
  const input = counter.querySelector("[data-input]");
  /** @type {HTMLButtonElement} */
  const up = counter.querySelector("[data-up]");
  /** @type {HTMLButtonElement} */
  const down = counter.querySelector("[data-down]");

  if (input && up && down) {
    let { min = 1, max } = input;

    min = +min;
    max = +max;

    input.addEventListener("change", () => {
      calcNewValue("none");
    });

    up.addEventListener("click", () => {
      calcNewValue("plus");
    });

    down.addEventListener("click", () => {
      calcNewValue("minus");
    });

    /** @param {"plus" | "minus" | "none"} [action] */
    function calcNewValue(action = "none") {
      let { value = 1, step = 1 } = input;
      let newValue;

      value = +value;
      step = +step;

      if (action === "none") newValue = value;
      if (action === "plus") newValue = value + step;
      if (action === "minus") newValue = value - step;
      if (newValue < min) newValue = min;
      if (max && newValue > max) newValue = max;

      input.value = newValue;

      cartList?.dispatchEvent(new Event("change"));
    }
  }
});
