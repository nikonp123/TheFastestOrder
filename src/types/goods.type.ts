export interface goodsGroupType {
  id: string;
  title: string;
}

export interface goodType {
  id: string;
  title: string;
  group: goodsGroupType;
}
export interface goodsType {
  good: goodType;
  balance?: number;
}
