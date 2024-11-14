import nouislider from "nouislider";

/** @type {NodeListOf<HTMLElement>} */
const nouisliderBlocks = document.querySelectorAll("[data-nouislider]");

nouisliderBlocks.forEach(block => {
  /** @type {HTMLInputElement} */
  const from = block.querySelector("[data-from]");
  /** @type {HTMLInputElement} */
  const to = block.querySelector("[data-to]");
  /** @type {HTMLElement} */
  const placeholder = block.querySelector("[data-placeholder]");

  if (from && to && placeholder) {
    const inputs = [from, to];
    const { dataset } = placeholder;

    let { start = 0, end = 11500, min = 0, max = 11500, step = 100, margin = 1000, currency = "₽" } = dataset;

    start = +start;
    end = +end;
    min = +min;
    max = +max;
    step = +step;
    margin = +margin;

    from.step = step;
    to.step = step;

    nouislider.create(placeholder, {
      range: {
        min,
        max,
      },
      step,
      margin,
      start: [start, end],
      connect: true,
      behaviour: "snap",
      format: {
        to: format,
        from: format,
      }
    });

    placeholder.noUiSlider.on("update", (values, handle) => {
      inputs[handle].value = values[handle];
    });

    from.addEventListener("change", () => {
      placeholder.noUiSlider.set([parseInt(from.value), null]);
    });

    to.addEventListener("change", () => {
      placeholder.noUiSlider.set([null, parseInt(to.value)]);
    });

    /**
   * @param {number} value
   * @returns {`${number} ₽`}
   */
    function format(value) {
      return parseInt(`${value}`);
    }
  }
});
