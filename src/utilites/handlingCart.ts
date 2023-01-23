import { ITotalCart } from '../types/cart.type';
import { ICartType } from '../types/goods.type';

export function getDataCart(cart: ICartType[], id: string): number {
  let currentCount = 0;
  const cartById = cart.find((e) => e.good.id === id);
  if (cartById) {
    currentCount = cartById.count;
  }
  return currentCount;
}

export function checkWithPrevCount(
  prevCountInState: number,
  countForChange: number,
  balance: number
): string {
  let errorMessage = '';
  let countForOrder = prevCountInState + countForChange;
  if (countForOrder > balance) {
    errorMessage = `Превышен остаток на складе! Имеется ${balance}! Вы заказываете ${countForOrder}`;
  } else if (countForOrder < 0) {
    errorMessage = `Вы заказываете отрицательное кол-во ${countForOrder}`;
  }

  return errorMessage;
}

export function checkCount(countForChange: number, balance: number): string {
  let errorMessage = '';
  if (countForChange > balance) {
    errorMessage = `Превышен остаток на складе! Имеется ${balance}! Вы заказываете ${countForChange}`;
  } else if (countForChange < 0) {
    errorMessage = `Вы заказываете отрицательное кол-во ${countForChange}`;
  }

  return errorMessage;
}

export function calculatePriceAndAmountCartWithoutDiscount(
  cartItem: ICartType
): ICartType {
  cartItem.price = cartItem.good?.price ?? 0;
  cartItem.amount = cartItem.price * cartItem.count;
  return cartItem;
}

export function getCountAndAmountOfCart(cartData: ICartType[]): string {
  let titleCart = '';
  if (cartData.length !== 0) {
    const cartItemsNumber = cartData.length.toString();
    const initialAmount = 0;
    const amount = cartData.reduce(
      (accumulator, amount, currentIndex) =>
        accumulator + (cartData[currentIndex].amount ?? 0),
      initialAmount
    );
    titleCart = cartItemsNumber + 'од. ' + amount.toFixed(2) + 'грн.';
    // titleCart = cartItemsNumber + 'од. ∑ ' + amount.toFixed(2) + 'грн.';
  }

  return titleCart;
}

export function getCartTotals(cartData: ICartType[]): ITotalCart {
  const itemsTotal = cartData.length;

  const initialAmount = 0;
  const amountTotal = cartData.reduce(
    (accumulator, amount, currentIndex) =>
      accumulator + (cartData[currentIndex].amount ?? 0),
    initialAmount
  );

  const initialCount = 0;
  const countTotal = cartData.reduce(
    (accumulator, count, currentIndex) =>
      accumulator + (cartData[currentIndex].count ?? 0),
    initialCount
  );

  return { amountTotal, countTotal, itemsTotal };
}
