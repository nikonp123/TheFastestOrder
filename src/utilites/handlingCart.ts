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
