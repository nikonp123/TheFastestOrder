export interface IGoodsCategoryType {
  id: string;
  title: string;
  apply?: boolean;
}

export interface IGoodType {
  id: string;
  title: string;
  group: IGoodsCategoryType;
}

export interface IGoodsType {
  good: IGoodType;
  price?: number;
  balance?: number;
}

export interface ICartType {
  good: IGoodType;
  count: number;
  balance: number;
  price?: number;
  summa?: number;
  error?: string;
}

export const enum ENamesGoodsFilters {
  category = 'category',
  onlyWithBalance = 'onlyWithBalance',
}

export interface IGoodFilter {
  value: string | number | boolean;
  apply: boolean;
}

export interface IGoodsFilters {
  name: ENamesGoodsFilters;
  value?: string | number | boolean;
  filters?: IGoodFilter[];
}
