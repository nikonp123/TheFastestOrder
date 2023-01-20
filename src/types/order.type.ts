import { IGoodType } from './goods.type';

export interface IGoodsOrderType {
  good: IGoodType;
  count: number;
  price?: number;
  amount?: number;
}

export interface IOrderType {
  customer_phone?: string;
  customer_firstName?: string;
  goods: IGoodsOrderType[];
}
