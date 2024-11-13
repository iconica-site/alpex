/** @type {HTMLElement} */
const cart = document.querySelector(".cart");
/** @type {HTMLUListElement} */
const cartList = cart?.querySelector(".cart-list");

if (cartList) {
  calcTotalPrice();
  cartList.addEventListener("change", calcTotalPrice);

  function calcTotalPrice() {
    /** @type {NodeListOf<HTMLElement>} */
    const cartCards = cartList.querySelectorAll("[data-price], .cart-item");
    /** @type {HTMLSpanElement} */
    const totalCount = cart.querySelector("[data-total-count], .cart-summary__count");
    /** @type {HTMLSpanElement} */
    const totalSum = cart.querySelector("[data-total-sum]");
    /** @type {HTMLSpanElement} */
    const orderPriceElement = cart.querySelector("[data-order-price], .cart-summary__item--order .cart-summary__value");
    /** @type {HTMLSpanElement} */
    const totalPay = cart.querySelector("[data-total-pay]");
    const zeroText = orderPriceElement?.dataset.zeroText || "Бесплатно!";
    const orderPrice = +orderPriceElement?.dataset.orderPrice || 0;
    /** @type {{card: HTMLElement, price: number, count: number, priceSum: HTMLSpanElement, index: number}[]} */
    const cardsInfoArray = [...cartCards].reduce(
      /**
       * @param {{card: HTMLElement, price: number, count: number, priceSum: HTMLSpanElement, index: number}[]} accumulator
       * @param {HTMLElement} card
       * @param {number} index
       * @param {NodeListOf<HTMLElement>} cards
       * @returns {{card: HTMLElement, price: number, count: number, priceSum: HTMLSpanElement, index: number}[]}
       */
      (accumulator, card, index, cards) => {
        const { dataset: cardDataset } = card;
        /** @type {HTMLInputElement} */
        const input = card.querySelector("[data-input], .cart-form__input");
        /** @type {HTMLSpanElement} */
        const priceSum = card.querySelector("[data-item-price-sum], .cart-actions__price .cart-price__value");

        let { price = 0 } = cardDataset;
        let count = +input?.value || 1;

        price = +price;

        const infoObject = {
          card,
          price,
          count,
          priceSum,
          index,
        }

        accumulator.push(infoObject);

        return accumulator;
      },
      []
    );

    if (cartCards.length) {
      if (cart.classList.contains("cart--empty")) cart.classList.remove("cart--empty");

      const sum = cardsInfoArray.reduce((accumulator, cardInfo) => {
        const { price, count } = cardInfo;

        return accumulator + (price * count);
      }, 0);

      cardsInfoArray.forEach(cardInfo => {
        const { priceSum, price, count } = cardInfo;
        const sum = price * count;

        if (priceSum) priceSum.textContent = sum.toLocaleString("ru");
      });

      if (totalCount) {
        totalCount.textContent = cardsInfoArray.reduce((accumulator, cardInfo) => {
          const { count } = cardInfo;

          return accumulator + count;
        }, 0);
      }

      if (totalSum) totalSum.textContent = sum.toLocaleString("ru");
      if (orderPriceElement) orderPriceElement.textContent = orderPrice ? orderPrice.toLocaleString("ru") : zeroText;
      if (totalPay) totalPay.textContent = (sum + orderPrice).toLocaleString("ru");
    } else {
      cart.classList.add("cart--empty");

      if (totalCount) totalCount.textContent = "0";
      if (totalSum) totalSum.textContent = "0";
      if (totalPay) totalPay.textContent = "0";
    }
  }
}
