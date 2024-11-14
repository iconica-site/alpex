/** @type {NodeListOf<HTMLUListElement>} */
const productColors = document.querySelectorAll(".product-colors__list");

productColors.forEach(list => {
  const children = list.children;
  const count = children.length;

  if (count > 5) list.dataset.count = count - 5;
});
