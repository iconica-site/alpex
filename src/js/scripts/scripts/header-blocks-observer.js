/** @type {HTMLElement} */
const header = document.querySelector(".header");
/** @type {HTMLElement} */
const headerTop = header?.querySelector(".header-top");
/** @type {HTMLElement} */
const headerMain = header?.querySelector(".header-main");

if (headerTop) {
  const headerTopResizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const { contentBoxSize } = entry;
      const { blockSize } = contentBoxSize[0];

      header.style.setProperty("--header-top-height", `${blockSize}px`);
    });
  });

  headerTopResizeObserver.observe(headerTop);
}

if (headerMain) {
  const headerMainResizeObserver = new ResizeObserver((entries) => {
    entries.forEach((entry) => {
      const { contentBoxSize } = entry;
      const { blockSize } = contentBoxSize[0];

      header.style.setProperty("--header-main-height", `${blockSize}px`);
    });
  });

  headerMainResizeObserver.observe(headerMain);
}
