/** @type {NodeListOf<HTMLInputElement | HTMLSelectElement>} */
const dynamicInputs = document.querySelectorAll('[data-dynamic-input]');

/** @type {{color: HTMLInputElement[]; size: HTMLSelectElement[]}} */
const dynamicInputsObject = [...dynamicInputs].reduce(
  /**
   * @param {{"color": HTMLInputElement[]; "size": HTMLSelectElement[]}} accumulator
   * @param {HTMLInputElement | HTMLSelectElement} element
   * @param {number} index
   * @param {HTMLInputElement[] | HTMLSelectElement[]} elements
   * @returns {{"color": HTMLInputElement[]; "size": HTMLSelectElement[]}}
   */
  (accumulator, element, index, elements) => {
    const { dataset } = element;
    const { dynamicInput } = dataset;

    if (accumulator[dynamicInput]) {
      accumulator[dynamicInput].push(element);
    } else {
      accumulator[dynamicInput] = [element];
    }

    return accumulator;
  }, {});

Object.entries(dynamicInputsObject).forEach(([type, elements]) => {
  const dynamicOutputs = document.querySelectorAll(`[data-dynamic-output="${type}"]`);

  if (dynamicOutputs.length) {
    changeOutput();

    elements.forEach(
      /** @param {HTMLInputElement | HTMLSelectElement} element */
      element => {
        element.addEventListener("change", changeOutput);
      });

    function changeOutput() {
      let output;

      if (type === "color") {
        const checkedRadio = elements.find(element => element.checked);
        const radioContainer = checkedRadio?.closest(".product-radio");
        const radioLabel = radioContainer?.querySelector(".product-radio__label .visually-hidden");

        output = radioLabel?.textContent;
      } else if (type === "size") {
        output = elements[0].value;
      }

      dynamicOutputs.forEach(dynamicOutput => {
        dynamicOutput.textContent = output;
      });
    }
  }
});
