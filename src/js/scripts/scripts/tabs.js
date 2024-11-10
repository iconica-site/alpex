/** @type {NodeListOf<HTMLElement>} */
const tabBlocks = document.querySelectorAll("[data-tabs]");

tabBlocks.forEach(tabBlock => {
  /** @type {NodeListOf<HTMLButtonElement>} */
  const tabButtons = tabBlock.querySelectorAll("[data-tab]");
  /** @type {NodeListOf<HTMLElement>} */
  const tabPanels = tabBlock.querySelectorAll("[data-panel]");

  if (tabButtons.length && tabPanels.length) {
    tabButtons.forEach(tabButton => {
      const { dataset } = tabButton;
      const { tab } = dataset;

      tabButton.addEventListener("click", () => {
        tabButtons.forEach(tabButton => {
          tabButton.classList.toggle("active", tabButton.dataset.tab === tab);
        });

        tabPanels.forEach(tabPanel => {
          tabPanel.toggleAttribute("hidden", tabPanel.dataset.panel !== tab);
        });
      });
    });
  }
});
