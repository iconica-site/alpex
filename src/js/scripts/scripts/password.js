/** @type {NodeListOf<HTMLElement>} */
const passwordBlocks = document.querySelectorAll("[data-password]")

passwordBlocks.forEach(passwordBlock => {
  /** @type {HTMLInputElement} */
  const input = passwordBlock.querySelector("[data-input]");
  /** @type {HTMLButtonElement} */
  const button = passwordBlock.querySelector("[data-button]");

  if (input && button) {
    const { dataset } = button;
    const { showText = "Показать", hideText = "Скрыть" } = dataset;

    button.addEventListener("click", () => {
      const { type } = input;

      input.type = type === "password" ? "text" : "password";
      button.textContent = type === "password" ? hideText.trim() : showText.trim();
      input.focus();
    });
  }
});
