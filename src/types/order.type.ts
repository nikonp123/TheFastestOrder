import { goodType } from './goods.type';

export interface goodsOrderType {
  good: goodType;
  count: number;
  price?: number;
}

export interface orderType {
  customer_phone: string;
  customer_firstName: string;
  goods: goodsOrderType[];
}
