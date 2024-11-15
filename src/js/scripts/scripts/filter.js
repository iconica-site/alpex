const MIN_WIDTH_992_PX = matchMedia("(min-width: 992.1px)");
/** @type {HTMLDialogElement} */
const filterDialog = document.querySelector(".filter-dialog");

if (filterDialog) {
  MIN_WIDTH_992_PX.addEventListener("change", (event) => {
    const { matches } = event;

    if (matches && filterDialog.hasAttribute("open")) filterDialog.click();
  });
}

/** @type {HTMLElement} */
const filter = document.querySelector(".filter");
/** @type {NodeListOf<HTMLInputElement>} */
const inputs = filter.querySelectorAll("input");

if (inputs.length) {
  /** @type {HTMLInputElement[]} */
  const numberInputs = [...inputs].filter(/** @param {HTMLInputElement} input */ input => input.type === "number");
  /** @type {HTMLInputElement[]} */
  const otherInputs = [...inputs].filter(/** @param {HTMLInputElement} input */ input => input.type !== "number");
  /** @type {HTMLButtonElement} */
  const resetButton = filter.querySelector(".filter-form__button--reset");
  /** @type {HTMLFormElement} */
  const form = filter.querySelector(".filter-form");
  /** @type {HTMLUListElement} */
  const activeFilters = document.querySelector(".active-filters__list");

  toggleResetButtonDisabled();

  if (activeFilters) activeFilters.textContent = "";

  addActiveFilter();

  inputs.forEach(input => {
    input.addEventListener("change", () => {
      toggleResetButtonDisabled();
    });
  });

  numberInputs.forEach(input => {
    input.addEventListener("changefromnouislider", () => {
      toggleResetButtonDisabled();

      if (activeFilters) {
        const { value } = input;
        /** @type {HTMLElement} */
        const parent = input.closest(".filter-prices");

        if (parent) {
          if (input.hasAttribute("data-from")) {
            const { dataset } = parent;
            const { min } = dataset;

            +value !== +min ? appendActiveFilter(input) : removeActiveFilter(input.id);
          } else if (input.hasAttribute("data-to")) {
            const { dataset } = parent;
            const { max } = dataset;

            +value !== +max ? appendActiveFilter(input) : removeActiveFilter(input.id);
          }
        }
      }
    });
  });

  otherInputs.forEach(input => {
    input.addEventListener("change", () => {
      if (activeFilters) {
        input.checked ? appendActiveFilter(input) : removeActiveFilter(input.id)
      }
    });
  });

  form?.addEventListener("reset", (event) => {
    event.preventDefault();

    numberInputs.forEach(input => {
      /** @type {HTMLElement} */
      const parent = input.closest(".filter-prices");

      if (parent) {
        if (input.hasAttribute("data-from")) {
          const { dataset } = parent;
          const { min } = dataset;

          input.value = min;
          input.dispatchEvent(new Event("change"));
        } else if (input.hasAttribute("data-to")) {
          const { dataset } = parent;
          const { max } = dataset;

          input.value = max;
          input.dispatchEvent(new Event("change"));
        }
      }
    });

    otherInputs.forEach(input => {
      input.checked = false;
    });

    if (activeFilters) activeFilters.textContent = "";
  });

  activeFilters?.addEventListener("click", (event) => {
    /** @type {{target: HTMLElement}} */
    const { target } = event;

    if (target.closest(".active-filter__button")) {
      const activeFilterItem = target.closest(".active-filters__item");
      const { dataset } = activeFilterItem;
      const { input } = dataset;
      const inputElement = document.getElementById(input);

      if (inputElement) {
        const { type } = inputElement;

        if (type === "number") {
          /** @type {HTMLElement} */
          const parent = inputElement.closest(".filter-prices");

          if (parent) {
            if (inputElement.hasAttribute("data-from")) {
              const { dataset } = parent;
              const { min } = dataset;

              inputElement.value = min;
            } else if (inputElement.hasAttribute("data-to")) {
              const { dataset } = parent;
              const { max } = dataset;

              inputElement.value = max;
            }
          }
        } else {
          inputElement.checked = false;
        }

        inputElement.dispatchEvent(new Event("change"));
      }
    }
  });

  function toggleResetButtonDisabled() {
    setTimeout(() => {
      resetButton?.toggleAttribute(
        "disabled",
        numberInputs.every(input => {
          const { value } = input;
          /** @type {HTMLElement} */
          const parent = input.closest(".filter-prices");

          if (parent) {
            if (input.hasAttribute("data-from")) {
              const { dataset } = parent;
              const { min } = dataset;

              return +value === +min;
            } else if (input.hasAttribute("data-to")) {
              const { dataset } = parent;
              const { max } = dataset;

              return +value === +max;
            }
          }
        }) && otherInputs.every(input => !input.checked)
      );
    });
  }

  function addActiveFilter() {
    if (activeFilters) {
      setTimeout(() => {
        numberInputs.forEach(input => {
          const { value } = input;
          /** @type {HTMLElement} */
          const parent = input.closest(".filter-prices");

          if (parent) {
            if (input.hasAttribute("data-from")) {
              const { dataset } = parent;
              const { min } = dataset;

              if (+value !== +min) appendActiveFilter(input);
            } else if (input.hasAttribute("data-to")) {
              const { dataset } = parent;
              const { max } = dataset;

              if (+value !== +max) appendActiveFilter(input);
            }
          }
        });

        otherInputs.forEach(input => {
          if (input.checked) appendActiveFilter(input);
        });
      });
    }
  }

  /** @param {HTMLInputElement} input */
  function appendActiveFilter(input) {
    const { id } = input;

    removeActiveFilter(id);

    const filterSpoilerItem = input.closest(".filter-spoilers__item");
    const filterLabel = filterSpoilerItem?.querySelector(".filter-spoilers__label");
    const label = filterLabel?.textContent;

    let value;

    if (input.type === "number") {
      const parent = input.closest(".filter-prices");

      value = input.value;

      if (parent) {
        const { dataset } = parent;
        const { currency } = dataset;

        value += ` ${currency}`;
      }
    } else {
      const filterItem = input.closest(".filter-checkboxes__item");
      const filterValue = filterItem?.querySelector(".filter-checkbox__text, .filter-color__text");

      value = filterValue?.textContent;
    }

    const html = `
    <li class="active-filters__item" data-input="${id}">
      <div class="active-filter">
        <span class="active-filter__text">${label}: ${value}</span>
        <button class="active-filter__button" aria-label="Удалить фильтр"></button>
      </div>
    </li>
    `;

    activeFilters.insertAdjacentHTML("beforeend", html);
  }

  /** @param {string} id */
  function removeActiveFilter(id) {
    const activeFilterItem = activeFilters?.querySelector(`[data-input="${id}"]`);

    activeFilterItem?.remove();
  }
}
