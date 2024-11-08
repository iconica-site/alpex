/** @type {NodeListOf<HTMLLIElement>} */
const spoilerItems = document.querySelectorAll(".header-spoilers__item");

if (spoilerItems.length) {
  const breakpoint = matchMedia("(min-width: 768.1px) and (hover: none)");
  const addedClass = "header-spoilers__button--active";

  if (breakpoint.matches) toggleAction();

  breakpoint.addEventListener("change", (event) => {
    const { matches } = event;

    if (matches) {
      toggleAction();
    } else {
      toggleAction("remove");
      removeAllActives();
    }
  });

  /** @param {"add" | "remove"} [action]  */
  function toggleAction(action = "add") {
    spoilerItems.forEach((item) => {
      const spoilerButton = item.querySelector(`.header-spoilers__button`);

      if (spoilerButton) {
        action === "add" ? addSpoilerButtonEventListener(spoilerButton) : removeSpoilerButtonEventListener(spoilerButton);
      }
    });

    document[action === "add" ? "addEventListener" : "removeEventListener"]("click", documentEventListener);
  }

  /** @param {HTMLButtonElement} button */
  function addSpoilerButtonEventListener(button) {
    button.addEventListener("click", spoilerButtonToggleActive);
  }

  /** @param {HTMLButtonElement} button */
  function removeSpoilerButtonEventListener(button) {
    button.removeEventListener("click", spoilerButtonToggleActive);
  }

  /** @this {HTMLButtonElement} */
  function spoilerButtonToggleActive() {
    /** @type {HTMLButtonElement} */
    const activeButton = document.querySelector(`.${addedClass}`);

    if (this !== activeButton) removeAllActives();

    this.classList.toggle(addedClass);
  }

  /** @param {MouseEvent} event  */
  function documentEventListener(event) {
    /** @type {{target: HTMLElement}} */
    const { target } = event;

    if (!target.closest(".header-catalog")) removeAllActives();
  }

  function removeAllActives() {
    /** @type {HTMLButtonElement} */
    const activeButton = document.querySelector(`.${addedClass}`);

    activeButton?.classList.remove(addedClass);
  }
}
