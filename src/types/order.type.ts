import { IGoodType } from './goods.type';

export interface IGoodsOrderType {
  good: IGoodType;
  count: number;
  price?: number;
}

export interface IOrderType {
  customer_phone: string;
  customer_firstName: string;
  goods: IGoodsOrderType[];
}
