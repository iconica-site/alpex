/** @type {HTMLButtonElement} */
const authorizationButton = document.querySelector(".authorization-button");

if (authorizationButton) {
  const hoverNone = matchMedia("(hover: none)");
  const addedClass = "authorization-button--active";

  if (hoverNone.matches) addAuthorizationEventListeners();

  hoverNone.addEventListener("change", (event) => {
    const { matches } = event;

    if (matches) {
      addAuthorizationEventListeners();
    } else {
      removeAuthorizationEventListeners();

      if (authorizationButton.classList.contains(addedClass)) authorizationButtonRemoveActive();
    }
  });

  function addAuthorizationEventListeners() {
    document.addEventListener("click", documentEventListener);
    authorizationButton.addEventListener("click", authorizationButtonToggleActive);
  }

  function removeAuthorizationEventListeners() {
    document.removeEventListener("click", documentEventListener);
    authorizationButton.removeEventListener("click", authorizationButtonToggleActive);
  }

  /** @param {MouseEvent} event  */
  function documentEventListener(event) {
    /** @type {{target: HTMLElement}} */
    const { target } = event;

    if (!target.closest(".header-authorization")) authorizationButtonRemoveActive();
  }

  function authorizationButtonToggleActive() {
    authorizationButton.classList.toggle(addedClass);
  }

  function authorizationButtonRemoveActive() {
    authorizationButton.classList.remove(addedClass);
  }
}
